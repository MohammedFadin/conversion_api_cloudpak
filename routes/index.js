const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { msg: "Hello Fadin to Cloud Pak!!" });
});

router.get("/login", (req, res) => {
  res.render("index", { msg: "Login page" });
});

module.exports = router;
