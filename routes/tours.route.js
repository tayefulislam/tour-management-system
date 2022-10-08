const express = require("express");
const toursController = require("../Controllers/tours.controller");

const router = express.Router();

router.route("/").get(toursController.getTours).post(toursController.saveTour);
router.route("/:id").get(toursController.getTourById);

module.exports = router;
