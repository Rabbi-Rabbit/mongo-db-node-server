const mongoose = require("mongoose");

const vocabSetSchema = new mongoose.Schema({
  vocab_id: {
    // reference to vocabulary id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vocabulary",
  },
  next_review: Date, // date of next review
  rank: Number, // rank of vocab: 0 = copper, 1 = bronze, 2 = silver, 3 = gold, 4 = platinum
});

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to user id
    required: true, // required field
  },
  user_name: {
    type: String,
    required: true,
  },
  user_level: Number,
  user_vocab: [vocabSetSchema], // array of vocabLevelSchema
});

mongoose.model("Profiles", profileSchema);
