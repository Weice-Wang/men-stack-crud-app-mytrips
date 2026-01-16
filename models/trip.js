const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  activities: String,
  priceRange: String,
  haveBeenThere: {
    type: Boolean,
    default: false,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
