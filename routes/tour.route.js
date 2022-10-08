const express = require("express");
const router = express.Router();

const tourController = require("../Controllers/tour.controller");

router.route("/trending").get(tourController.TrendingTour);
router.route("/cheapest").get(tourController.CheapestTour);

router.route("/:id").patch(tourController.UpdateTour);

module.exports = router;
