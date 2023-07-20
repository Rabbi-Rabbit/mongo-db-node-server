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
    await testVocab2.save();
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
    await testVocab2.save();
  });

  it("19a - updates vocab by id using set n save", async () => {
    testVocab.set("vocab_level", 2);
    await testVocab.save();
    let vocab = await Vocabulary.findOne({ _id: testvocab._id });
    assert(vocab.vocab_level === 2);
  });

  it("19b - updates vocab by id", async () => {
    await Vocabulary.updateOne(
      { _id: testvocab._id },
      { translation: "testing update 2", transliteration: "testing update 2.2" }
    );
    let Vocabulary = await vocab.findOne({ _id: testvocab._id });
    assert(vocab.translation === "testing update 2");
    assert(vocab.transliteration === "testing update 2.2");
  });
});

describe("Deleting vocab records", () => {
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
