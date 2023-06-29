const mongoose = require("mongoose");

const schema = mongoose.Schema({
  flightNumber: {
    type: String,
    required : true,
  },
  flightSource: {
    type: String,
    required : true,
  },
  flightDestination: {
    type: String,
    required : true,
  },
  flightDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("flightInfo", schema);
