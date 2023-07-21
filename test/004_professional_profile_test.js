const { describe } = require("mocha");
const mongoose = require("mongoose");
const Profile = mongoose.model("Profile");
const User = mongoose.model("User");
const assert = require("assert");

describe("Creating records", () => {
  it("10 - saves a new profile", async () => {
    const testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();

    const testProfile = new Profile({
      user_name: "Nunya",
      user_level: 1,
      userId: testUser._id,
      user_vocab: [],
    });
    await testProfile.save();
    assert(!testProfile.isNew);
  });
});

describe("Reading user profile records", () => {
  beforeEach(async () => {
    testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();

    testProfile = new Profile({
      user_name: "Nunya",
      user_level: 1,
      userId: testUser._id,
    });
    await testProfile.save();
  });

  it("11 - finds user profile by userId", async () => {
    let profile = await Profile.findOne({ userId: testUser._id });
    assert(profile.user_name === "Nunya");
  });
});

describe("Updating user profile records", () => {
  beforeEach(async () => {
    testUser = new User({
      email: "test@test.com",
      password: "test",
    });
    await testUser.save();

    testProfile = new Profile({
      user_name: "Nunya",
      user_level: 1,
      userId: testUser._id,
    });
    await testProfile.save();
  });

  it("12 - updates user profile by userId", async () => {
    let profile = await Profile.findOne({ userId: testUser._id });
    //upate record here
    assert(profile.user_name === "Nunya");
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

    testProfile = new Profile({
      user_name: "Nunya",
      user_level: 1,
      userId: testUser._id,
    });
    await testProfile.save();
  });

  it("14 - deletes user profile by id", async () => {
    let profile = await Profile.deleteOne({ userId: testUser._id });
    let profiles = await Profile.findOne({ userId: testUser._id });
    assert(profile.deletedCount === 1);
    assert(profiles.length === 0);
  });
});
