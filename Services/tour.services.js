const Tours = require("../models/Tours");

exports.saveTourService = async (tour) => {
  const saveTour = new Tours(tour);
  const result = await saveTour.save();

  console.log(result);
  return result;
};

exports.getTourByIdService = (id) => {
  const result = Tours.findById({ _id: id });
  return result;
};
