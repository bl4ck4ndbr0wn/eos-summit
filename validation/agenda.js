const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateAgendaInput(req) {
  let data = req.body;
  let errors = {};

  data.session = !isEmpty(data.session) ? data.session : "";
  data.day = !isEmpty(data.day) ? data.day : "";
  data.month = !isEmpty(data.month) ? data.month : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.time = !isEmpty(data.time) ? data.time : "";

  if (Validator.isEmpty(data.session)) {
    errors.session = "Session field is required";
  }
  if (Validator.isEmpty(data.day)) {
    errors.day = "Day field is required";
  }
  if (Validator.isEmpty(data.month)) {
    errors.month = "Month field is required";
  }
  if (isEmpty(req.files)) {
    errors.fileupload = "File field is required";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.time)) {
    errors.time = "Time field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
