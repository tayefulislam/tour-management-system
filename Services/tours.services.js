const Tours = require("../models/Tours");

exports.getToursServices = async (queries) => {
  const result = await Tours.find({}).select(queries.fields);
  return result;
};

exports.saveTourService = async (tour) => {
  const saveTour = new Tours(tour);
  const result = await saveTour.save();

  console.log(result);
  return result;
};

exports.getTourByIdService = async (id) => {
  const incrementOne = await Tours.updateOne(
    { _id: id },
    { $inc: { totalView: 1 } }
  );
  const result = await Tours.findById({ _id: id });

  return { result, incrementOne };
};
