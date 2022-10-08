const TotalHit = require("../models/TotalHit");
const Tours = require("../models/Tours");

const hit = async () =>
  await TotalHit.updateOne(
    { _id: "6341dff8a1dcb75c86f339de" },
    { $inc: { totalHit: 1 } }
  );

exports.getToursServices = async (filters, queries) => {
  console.log(queries);

  const result = await Tours.find({})
    .select(queries.fields)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sort);
  const TourCount = await Tours.countDocuments(filters);
  const pageCount = Math.ceil(TourCount / queries.limit);

  hit();

  return { pageCount, result };
};

exports.saveTourService = async (tour) => {
  const saveTour = new Tours(tour);
  const result = await saveTour.save();

  console.log(result);
  hit();
  return result;
};

exports.getTourByIdService = async (id) => {
  const incrementOne = await Tours.updateOne(
    { _id: id },
    { $inc: { totalView: 1 } }
  );
  const result = await Tours.findById({ _id: id });
  hit();

  return { result, incrementOne };
};
