const express = require("express");
const router = express.Router();

const tourController = require("../Controllers/tour.controller");

// router.route("/trending").patch(tourController.saveTour);
// router.route("/cheapest").patch(tourController.saveTour);

router.route("/:id").patch(tourController.UpdateTour);

module.exports = router;
