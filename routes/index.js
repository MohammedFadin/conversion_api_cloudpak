const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { msg: "Hello Fadin to Cloud Pak v3!!" });
});

router.get("/login", (req, res) => {
  res.render("index", { msg: "Login to your system" });
});

module.exports = router;
