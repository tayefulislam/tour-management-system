const {
  UpdateTourService,
  TrendingTourSerive,
  CheapestTourSerive,
} = require("../Services/tour.services");

exports.UpdateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const upData = req.body;

    console.log(id, upData);

    const result = await UpdateTourService(id, upData);

    res.status(200).json({
      status: "success",
      message: "Update Successful",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Update failed",
      error: error.message,
    });
  }
};

exports.TrendingTour = async (req, res) => {
  try {
    const result = await TrendingTourSerive();
    res.status(200).json({
      status: "success",
      message: "Get Trending DATA Successful",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Get Trending DATA failed",
      error: error.message,
    });
  }
};

exports.CheapestTour = async (req, res) => {
  try {
    const result = await CheapestTourSerive();
    res.status(200).json({
      status: "success",
      message: "Get CheapestTour DATA Successful",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Get CheapestTour DATA failed",
      error: error.message,
    });
  }
};
