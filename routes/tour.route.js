const express = require("express");
const router = express.Router();

const tourController = require("../Controllers/tour.controller");

router.route("/").post(tourController.saveTour);

router.route("/:id").get(tourController.getTourById);

module.exports = router;
