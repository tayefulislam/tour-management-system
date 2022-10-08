const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middlare

app.use(express.json());
app.use(cors());

const toursRouter = require("./routes/tours.route");
const tourRouter = require("./routes/tour.route");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/tour", tourRouter);

module.exports = app;
