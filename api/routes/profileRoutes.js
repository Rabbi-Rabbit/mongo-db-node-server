const router = require("express").Router();
const mongoose = require("mongoose");
const Profile = mongoose.model("Profile");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

//profile CRUD routes

//create:
router.post("/", async (req, res) => {
  const reqBody = { ...req.body, userId: req.user._id };

  try {
    const profile = new Profile(reqBody);
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//read:
router.get("/", async (req, res) => {
  try {
    const currentProfile = await Profile.findOne({ userId: req.user._id });
    if (!currentProfile) {
      return res.status(404).send({ error: "profile not found" });
    }
    res.send(currentProfile);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//update:
router.put("/", async (req, res) => {
  try {
    await Profile.updateOne({ userId: req.user._id }, req.body);
    let updatedProfile = await Profile.findOne({ userId: req.user._id });
    if (!updatedProfile) {
      return res.status(404).send({ error: "profile not found" });
    }
    res.send(updatedProfile);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//delete:
router.delete("/", async (req, res) => {
  try {
    const deleteProfile = await Profile.deleteOne({ userId: req.user._id });
    if (!deleteProfile) {
      return res.status(404).send({ error: "profile not found" });
    }
    res.send(`${deleteProfile.deletedCount} profile deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
