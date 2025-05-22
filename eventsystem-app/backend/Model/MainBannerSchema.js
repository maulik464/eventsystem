// const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const MainBannerSchema = new mongoose.Schema({
  imagetext: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bannerposition:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model("Mainbanner", MainBannerSchema);
