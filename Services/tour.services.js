const TotalHit = require("../models/TotalHit");
const Tours = require("../models/Tours");

const hit = async () =>
  await TotalHit.updateOne(
    { _id: "6341dff8a1dcb75c86f339de" },
    { $inc: { totalHit: 1 } }
  );

exports.UpdateTourService = async (id, upData) => {
  const result = await Tours.updateOne({ _id: id }, upData);
  console.log(result);
  hit();
  return result;
};

exports.TrendingTourSerive = async () => {
  const result = await Tours.find({}).sort("-totalView").limit(3);
  hit();
  return result;
};

exports.CheapestTourSerive = async () => {
  const result = await Tours.find({}).sort("price").limit(3);
  hit();
  return result;
};
