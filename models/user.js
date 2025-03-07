const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, require: true },
  age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;