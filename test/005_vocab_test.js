const { describe } = require("mocha");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Vocabulary = mongoose.model("Vocabulary");
const assert = require("assert");

describe("Creating records", () => {
  it("15 - saves a new vocab word", async () => {
    const testVocab = new Vocabulary({
      hebrew: "אָב",
      transliteration: "av",
      translation: "father",
      vocab_level: 1,
    });
    await testVocab.save();
    assert(!testVocab.isNew);
  });
});

describe("Reading vocab records", () => {
  beforeEach(async () => {
    testVocab = new Vocabulary({
      hebrew: "אָב",
      transliteration: "av",
      translation: "father",
      vocab_level: 1,
    });
    await testVocab.save();

    testVocab2 = new Vocabulary({
      hebrew: "אֵם",
      transliteration: "em",
      translation: "mother",
      vocab_level: 1,
    });
    await testJob2.save();
  });

  it("16 - finds added vocab", async () => {
    let vocab = await Vocabulary.find();
    assert(vocab.length === 2);
  });

  it("17 - finds vocab by id", async () => {
    let vocab = await Vocabulary.findOne({ _id: testVocab._id });
    assert(vocab.hebrew === "אָב");
  });
});

describe("Updating vocab words", () => {
  beforeEach(async () => {
    testUser = new User({
      email: "test@test.com",
      password: "test",
      account_type: "company",
    });
    await testUser.save();

    testJob = new Job({
      title: "Full Stack Dev",
      company: "Grow: Work",
      userId: testUser._id,
    });
    await testJob.save();

    testJob2 = new Job({
      title: "Front End Dev",
      company: "Serenity Images",
      userId: testUser._id,
    });
    await testJob2.save();
  });

  it("19a - updates job by id using set n save", async () => {
    testJob.set("title", "testingupdate");
    await testJob.save();
    let job = await Job.findOne({ _id: testJob._id });
    assert(job.title === "testingupdate");
  });

  it("19b - updates job by id", async () => {
    await Job.updateOne(
      { _id: testJob._id },
      { title: "testing update 2", company: "testing update 2.2" }
    );
    let job = await Job.findOne({ _id: testJob._id });
    assert(job.title === "testing update 2");
    assert(job.company === "testing update 2.2");
  });
});

describe("Deleting job records", () => {
  beforeEach(async () => {
    testVocab = new Vocabulary({
      hebrew: "אָב",
      transliteration: "av",
      translation: "father",
      vocab_level: 1,
    });
    await testVocab.save();
    assert(!testVocab.isNew);
  });

  it("20 - deletes vocab by id", async () => {
    let vocab = await Vocabulary.deleteOne({ _id: testVocab._id });
    let vocabs = await Vocabulary.find();
    assert(vocab.deletedCount === 1);
    assert(vocabs.length === 0);
  });
});
