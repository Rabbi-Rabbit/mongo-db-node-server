const { describe } = require("mocha");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const assert = require("assert");

describe("Creating records", () => {
  it("01 - saves a user", async () => {
    const testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();
    assert(!testUser.isNew);
  });
});

describe("Reading users records", () => {
  let testUser;

  beforeEach(async () => {
    testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();
  });

  it("02 - finds user by id", async () => {
    let user = await User.findOne({ _id: testUser._id });
    assert(user.email === "test@test.com");
  });
});

describe("Updating users records", () => {
  let testUser;

  beforeEach(async () => {
    testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();
  });

  it("03 - updates user by id", async () => {
    let user = await User.findOne({ _id: testUser._id });
    //update record here
    assert(user.email === "test@test.com");
  });
});

describe("Deleting users records", () => {
  let testUser;

  beforeEach(async () => {
    testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();
  });

  it("04 - deletes user by id", async () => {
    let user = await User.deleteOne({ _id: testUser._id });
    let users = await User.find();
    assert(user.deletedCount === 1);
    assert(users.length === 0);
  });
});
