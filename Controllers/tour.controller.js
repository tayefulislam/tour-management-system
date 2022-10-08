const { saveTourService } = require("../Services/tour.services");

exports.saveTour = async (req, res) => {
  try {
    const tour = req.body;

    const result = await saveTourService(tour);

    res.status(200).json({
      status: "fails",
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
