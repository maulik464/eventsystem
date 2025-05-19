const express = require('express');
const mainbanner = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const {
  addNewBanner,
  getBanner,
  updateBanner,
  deleteBanner
} = require('../Controller/MainBannerController');

mainbanner.post('/addNewBanner', upload.single('file'), addNewBanner);
mainbanner.get('/getBanner', getBanner);
mainbanner.put('/updateBanner', updateBanner);
mainbanner.delete('/deleteBanner', deleteBanner);

module.exports = mainbanner;
