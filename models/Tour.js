const mongoose = require("mongoose");

const TourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a name"],
    trim: true,
    unique: [true, "Name must be unique"],
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be nagative number"],
  },
  details: {
    type: String,
    required: true,
  },
  totalView: {
    type: Number,
    min: [0, "Total view Cannot be nagative number"],
  },
});

const Tours = mongoose.model("Tours", TourSchema);

module.exports = Tours;
