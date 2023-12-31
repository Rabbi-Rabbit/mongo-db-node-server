const mongoose = require("mongoose");

const vocabSchema = new mongoose.Schema({
  hebrew: String,
  hebrew_with_nikkud: String,
  reading: String,
  meaning: String,
  lesson: Number,
  gender: String,
});

mongoose.model("Vocabulary", vocabSchema);
