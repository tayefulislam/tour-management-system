const express = require("express");
const toursController = require("../Controllers/tours.controller");

const router = express.Router();

router.route("/").get(toursController.getTours);

module.exports = router;
