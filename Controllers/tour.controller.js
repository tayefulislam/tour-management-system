const {
  saveTourService,
  getTourByIdService,
} = require("../Services/tour.services");

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
