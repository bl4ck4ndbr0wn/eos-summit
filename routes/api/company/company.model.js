const mongoose = require("mongoose");

const { Schema } = mongoose;

let Company = null;

try {
  const CompanySchema = new Schema({
    category: String,
    name: String,
    image: String,
    link: String,
    companyConfirmed: {
      type: Boolean,
      default: false
    }
  });
  Company = mongoose.model("Company", CompanySchema);
} catch (e) {
  Company = mongoose.model("Company");
}

module.exports = Company;
