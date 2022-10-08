const Tours = require("../models/Tours");

exports.UpdateTourService = async (id, upData) => {
  const result = await Tours.updateOne({ _id: id }, upData);
  console.log(result);
  return result;
};
