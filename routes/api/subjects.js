const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Post = require("../../models/Post");
// Profile model
const Profile = require("../../models/Profile");
// Subject model
const Subject = require("../../models/Subject");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Subject Works" }));

// @route   GET api/subjects
// @desc    Get subjects
// @access  Public
router.get("/", (req, res) => {
  Subject.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(404).json({ noSubjectFound: "No subject found" }));
});

// @route   GET api/subject/:id
// @desc    Get subject by id
// @access  Public
router.get("/:id", (req, res) => {
  Subject.findById(req.params.id)
    .then(subject => {
      if (subject) {
        res.json(subject);
      } else {
        res
          .status(404)
          .json({ noSubjectFound: "No subjects found with that ID" });
      }
    })
    .catch(err =>
      res.status(404).json({ noSubjectFound: "No subjects found with that ID" })
    );
});

// @route   Subject api/posts
// @desc    Create Subject
// @access  Private
router.post(
  "/",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newSubject = new Subject({
      name: req.body.name,
      semester: req.body.semester,
      branch: req.body.branch,
      university: req.body.university,
      modules: req.body.modules
    });

    newSubject.save().then(subject => res.json(subject));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete Subject
// @access  Private
router.delete(
  "/:id",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Subject.findById(req.params.id)
      .then(subject => {
        // Delete
        subject.remove().then(() => res.json({ success: true }));
      })
      .catch(err =>
        res.status(404).json({ noSubjectFound: "No Subject found" })
      );
  }
);

// @route   GET api/subject/:id
// @desc    Get subject by module name
// @access  Public
router.get("/module/:name", (req, res) => {
  Subject.find({ modules: { $elemMatch: { name: req.params.name } } })
    .then(subject => {
      if (subject) {
        res.json(subject);
      } else {
        res.status(404).json({ noSubjectFound: "not found" });
      }
    })
    .catch(err => res.status(404).json({ noSubjectFound: "err" }));
});

module.exports = router;
