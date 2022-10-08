const express = require("express");
const router = express.Router();

const tourController = require("../Controllers/tour.controller");

router.route("/").post(tourController.saveTour);

module.exports = router;
