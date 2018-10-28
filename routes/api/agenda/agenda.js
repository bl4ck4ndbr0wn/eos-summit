const express = require("express");
const passport = require("passport");
const Agenda = require("../agenda.model");
const multer = require("multer");

const router = express.Router();

const validateAgendaInput = require("../../../validation/agenda");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // rejest a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/svg"
  ) {
    cb(null, true);
  } else {
    let errors = {
      fileupload: "Only Jpeg or png or svg are allowed."
    };

    cb(new Error(errors), false);
  }
};

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const confirmedAgendas = await Agenda.find({
      agendaConfirmed: true
    }).exec();
    res.send(confirmedAgendas);
  } catch (err) {
    console.error(err);
  }
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.any("fileupload"),
  (req, res) => {
    const { errors, isValid } = validateAgendaInput(req);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    // Get fields
    const agendaFields = {};
    if (req.body.session) agendaFields.session = req.body.session;
    if (req.body.day) agendaFields.day = req.body.day;
    if (req.body.month) agendaFields.month = req.body.month;

    req.files.map(file => {
      agendaFields.speakerImage = file.path;
    });

    if (req.body.title) agendaFields.title = req.body.title;
    if (req.body.time) agendaFields.time = req.body.time;
    if (req.body.link) agendaFields.link = req.body.link;
    agendaFields.agendaConfirmed = true;

    Agenda.findById(req.body.id)
      .then(agenda => {
        if (agenda) {
          Agenda.findOneAndUpdate(
            { _id: req.body.id },
            {
              $set: agendaFields
            },
            { new: true }
          )
            .then(agenda => res.json(agenda))
            .catch(err => res.status(404).json(err));
        } else {
          new Agenda(agendaFields).save().then(agenda => res.json(agenda));
        }
      })
      .catch(err => res.status(404).json(err));
  }
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Agenda.findOneAndRemove({ _id: req.body.id }).then(() => {
      res.json({ success: true });
    });
  }
);
module.exports = router;
