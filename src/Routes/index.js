"use strict";
/**
 * Required dempendencies
 */
const express = require("express");
const router = express.Router();

/**
 * Controllers
 */
const crtlTask = require("../Controllers/ctrlTask");

/**
 * Task routes
 */
router.post("/task", crtlTask.createTask);

/**
 * Redirect if page was not found
 */
router.get("/*", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "../../../public" });
});

module.exports = router;
