const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const vocabSetSchema = new mongoose.Schema({
  vocab_id: {
    // reference to vocabulary id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vocabulary",
    required: true,
  },
  next_review: Date, // date of next review
  lesson_number: Number, // lesson number
  rank: Number, // rank of vocab: 0 = copper, 1 = bronze, 2 = silver, 3 = gold, 4 = platinum
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  available_lesson: Number,
  user_lessons: [String], // array of vocab_id
  user_vocab: [vocabSetSchema], // array of vocabLevelSchema
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (pwd) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(pwd, user.password, (err, isMatch) => {
      if (err) {
        return next(err);
      }

      if (!isMatch) {
        return reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

mongoose.model("User", userSchema);
