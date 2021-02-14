const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout");

// Get Route
// Look up the Aggregate function for get routes

// router.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// router.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/stats.html"));
// });

module.exports = router;
