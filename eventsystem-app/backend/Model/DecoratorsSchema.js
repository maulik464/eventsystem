const mongoose = require("mongoose");

const DecoratorsSchema = new mongoose.Schema({
  details: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Decorators", DecoratorsSchema);