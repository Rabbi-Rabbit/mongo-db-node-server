require("dotenv").config();
require("../api/models/User");
require("../api/models/Profile");
require("../api/models/Vocabulary");

const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL_ALT;

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
  });
  mongoose.connection
    .once("open", () => {
      console.log("Connected to mongo db"), done();
    })
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.user.drop(() => {});
  mongoose.connection.collections.profile.drop(() => {});
  mongoose.connection.collections.vocabulary.drop(() => {
    // Ready to run the next test!
    done();
  });
});
