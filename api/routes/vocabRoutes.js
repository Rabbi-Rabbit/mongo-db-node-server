const router = require("express").Router();
const mongoose = require("mongoose");
const Vocabulary = mongoose.model("Vocabulary");

//profile CRUD routes

//create:
router.post("/", async (req, res) => {
  const reqBody = { ...req.body };

  try {
    const vocab = new Vocabulary(reqBody);
    await vocab.save();
    // res.send(vocab);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//read all:
router.get("/", async (req, res) => {
  try {
    const vocab = await Vocabulary.find();
    if (!vocab) {
      return res.status(404).send({ error: "vocab empty" });
    }
    res.send(vocab);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//read:
// router.get("/:id", async (req, res) => {
//   try {
//     const vocab = await Vocabulary.findOne({ _id: req.params.id });
//     if (!vocab) {
//       return res.status(404).send({ error: "vocab not found" });
//     }
//     res.send(vocab);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

//update by id:
router.put("/:id", async (req, res) => {
  try {
    await Vocabulary.updateOne({ _id: req.params.id }, req.body);
    let updatedVocab = await Vocabulary.findOne({ _id: req.params.id });
    if (!updatedVocab) {
      return res.status(404).send({ error: "vocab not found" });
    }
    res.send(updatedVocab);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//delete by id:
router.delete("/:id", async (req, res) => {
  try {
    const deleteVocab = await Vocabulary.deleteOne({ _id: req.params.id });
    if (!deleteVocab) {
      return res.status(404).send({ error: "vocab not found" });
    }
    res.send(`${deleteVocab.deletedCount} vocab deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
