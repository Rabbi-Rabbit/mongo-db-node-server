const mongoose = require("mongoose");

const userPinSchema = new mongoose.Schema({
  email: String,
  pin: String,
});

mongoose.model("UserPin", userPinSchema);
