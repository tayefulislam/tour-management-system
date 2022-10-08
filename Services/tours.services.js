const Tours = require("../models/Tours");

exports.getToursServices = async () => {
  const result = await Tours.find({});
  return result;
};
