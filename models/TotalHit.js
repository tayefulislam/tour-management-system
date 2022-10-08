const mongoose = require("mongoose");

const TotalHitSchema = mongoose.Schema({
  totalHit: {
    type: Number,
    required: true,
  },
});

const TotalHit = mongoose.model("TotalHit", TotalHitSchema, "totalHit");

module.exports = TotalHit;
