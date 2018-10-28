const express = require("express");
const passport = require("passport");
const Company = require("./company.model");
const multer = require("multer");

const router = express.Router();

const validateCompanyInput = require("../../../validation/company");

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
    const confirmedCompanies = await Company.find({
      agendaConfirmed: true
    }).exec();
    res.send(confirmedCompanies);
  } catch (err) {
    console.error(err);
  }
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCompanyInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    // Get fields
    const companyFields = {};
    if (req.body.category) companyFields.category = req.body.category;
    if (req.body.name) companyFields.name = req.body.name;

    req.files.map(file => {
      companyFields.image = file.path;
    });

    if (req.body.link) companyFields.link = req.body.link;
    companyFields.agendaConfirmed = true;

    Company.findById(req.body.id)
      .then(company => {
        if (company) {
          Company.findOneAndUpdate(
            { _id: req.body.id },
            {
              $set: companyFields
            },
            { new: true }
          )
            .then(company => res.json(company))
            .catch(err => res.status(404).json(err));
        } else {
          new Company(companyFields).save().then(company => res.json(company));
        }
      })
      .catch(err => res.status(404).json(err));
  }
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    company.findOneAndRemove({ _id: req.body.id }).then(() => {
      res.json({ success: true });
    });
  }
);
module.exports = router;
