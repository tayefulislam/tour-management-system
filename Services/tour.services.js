const Tours = require("../models/Tours");

exports.UpdateTourService = async (id, upData) => {
  const result = await Tours.updateOne({ _id: id }, upData);
  console.log(result);
  return result;
};

exports.TrendingTourSerive = async () => {
  const result = await Tours.find({}).sort("-totalView").limit(3);
  return result;
};

exports.CheapestTourSerive = async () => {
  const result = await Tours.find({}).sort("price").limit(3);
  return result;
};
