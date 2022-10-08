const { getToursServices } = require("../Services/tours.services");

exports.getTours = async (req, res, next) => {
  try {
    const result = await getToursServices();
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
