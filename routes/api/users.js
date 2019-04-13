const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

var node_mail = require("../../Mail/common_mail");
// User Model
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });

    var msg =
      "Greetings from Wiki Notes <br> Thank you for login to Wiki Notes.<br> <br> click the following link to verify your email address <br> " +
      "http://localhost:5000/api/users/verify/" +
      cryptr.encrypt(newUser.email) +
      "<br> Regards<br> Team Wiki Notes<br>";

    node_mail.send_email(newUser.email, "Confirmation", msg);
  });
});

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.get("/verify/:email", (req, res) => {
  console.log("API hit");
  const decEmail = cryptr.decrypt(req.params.email);
  console.log(decEmail);

  User.findOne({ email: decEmail })
    .then(user => {
      if (user) {
        user.verified = "true";
        user.save();
        res.redirect("http://localhost:3000/accountverified");
      } else {
        res
          .status(404)
          .json({ noSubjectFound: "No subjects found with that ID" });
      }
    })
    .catch(err =>
      res.status(404).json({ noSubjectFound: "No subjects found with that ID" })
    );
  var msg =
    "Greetings from Wiki Notes <br> Thank you for Verifying your account to Wiki Notes.<br> " +
    "<br> Regards<br> Team Wiki Notes<br>";

  node_mail.send_email(decEmail, "Confirmation", msg);
});

module.exports = router;
