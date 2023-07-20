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
    res.send(updatedProfile);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//delete:
router.delete("/", async (req, res) => {
  try {
    const deleteProfile = await Profile.deleteOne({ userId: req.user._id });
    res.send(`${deleteProfile.deletedCount} profile deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//company job-listings CRUD operations

//create:
// router.post('/job-listings', async (req, res) => {

//     const reqBody = {...req.body, userId: req.user._id}

//     try {
//         const newJobListing = new Job(reqBody)
//         await newJobListing.save()
//         //sending back the new array of job listings
//         const jobListing = await Job.find({userId: req.user._id})
//         res.send(jobListing)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

//read

// router.get('/job-listings', async (req, res) => {

//     try {
//         const jobListing = await Job.find({userId: req.user._id})
//         res.send(jobListing)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }

// })

// router.get('/job-listings/:id', async (req, res) => {

//     try {
//         const jobListing = await Job.findOne({_id: req.params.id})
//         res.send(jobListing)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

//update
// router.put('/job-listings/:id', async (req, res) => {

//     try {
//         await Job.updateOne({_id: req.params.id}, req.body)
//         //sending back the newly updated array of job listings
//         let jobListing = await Job.find({userId: req.user._id})
//         res.send(jobListing)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// router.delete('/job-listings/:id', async (req, res) => {

//     try {
//         await Job.deleteOne({_id: req.params.id})
//         res.send(`Job listing deleted.`)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

//saved-jobs routes

//read

// router.get('/saved-job/:id', async (req, res) => {

//     //do stuff here
// })

//delete
// router.delete('/saved-job/:id', async (req, res) => {
//     try {
//         const savedJob = await Professional.deleteOne({_id: req.params.id})
//         res.send(`${savedJob.deletedCount} saved job deleted`)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

module.exports = router;
