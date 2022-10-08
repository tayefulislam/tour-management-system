const {
  getToursServices,
  getTourByIdService,
  saveTourService,
} = require("../Services/tours.services");

exports.getTours = async (req, res, next) => {
  try {
    const queries = {};

    // fields

    let filters = { ...req.query };

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      // console.log(fields);
      queries.fields = fields;
    }

    // sort

    if (req.query.sort) {
      const sort = req.query.sort.split(",").join(" ");
      queries.sort = sort;
    }
    //page and limit : pagination
    const page = req.query.page;

    if (page) {
      const { page = 1, limit = 10 } = req.query;

      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const result = await getToursServices(filters, queries);

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
