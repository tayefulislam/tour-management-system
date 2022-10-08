const Tours = require("../models/Tour");

exports.getToursServices = async () => {
  const result = await Tours.find({});
  return result;
};
