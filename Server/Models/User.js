const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  feedback: String,
  phoneNumber: String,
});
module.exports = mongoose.model("users", userSchema);
