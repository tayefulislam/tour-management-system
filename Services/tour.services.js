const Tours = require("../models/Tour");

exports.saveTourService = (tour) => {
  const result = Tours.insertOne(tour);
  return result;
};
