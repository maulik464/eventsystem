const mongoose = require("mongoose");

const WeddingDestinationSchema = new mongoose.Schema({
  slider1: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Weddingdestination", WeddingDestinationSchema);
