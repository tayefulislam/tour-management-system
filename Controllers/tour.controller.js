const { UpdateTourService } = require("../Services/tour.services");

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
