const mongoose = require("mongoose");

const vocabSchema = new mongoose.Schema({
  hebrew: String,
  transliteration: String,
  translation: String,
  vocab_level: Number,
});

mongoose.model("Vocabulary", vocabSchema);
