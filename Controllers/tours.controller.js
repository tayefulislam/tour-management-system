const {
  getToursServices,
  getTourByIdService,
  saveTourService,
} = require("../Services/tours.services");

exports.getTours = async (req, res, next) => {
  try {
    const queries = {};

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      // console.log(fields);
      queries.fields = fields;
    }

    const result = await getToursServices(queries);
    console.log("hello");

    res.status(200).json({
      status: "success",
      message: "Data Get Successful",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Get data failed",
      error: error.message,
    });
  }
};

exports.saveTour = async (req, res, next) => {
  try {
    const tour = req.body;
    // console.log(tour);

    const result = await saveTourService(tour);
    console.log(result);

    res.status(200).json({
      status: "success",
      message: "Insert Successful",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Insert Tour failed",
      error: error.message,
    });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const result = await getTourByIdService(id);
    console.log(result);

    res.status(200).json({
      status: "success",
      message: "Tour Get Successful",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Tour Get failed",
      error: error.message,
    });
  }
};
