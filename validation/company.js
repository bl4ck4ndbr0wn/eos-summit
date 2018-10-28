const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCompanyInput(req) {
  let data = req.body;
  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.link = !isEmpty(data.link) ? data.link : "";

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (isEmpty(req.files)) {
    errors.fileupload = "File field is required";
  }
  if (Validator.isEmpty(data.link)) {
    errors.link = "Link field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
