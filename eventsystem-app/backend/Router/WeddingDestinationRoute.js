const express = require('express');
const weddingdestination = express.Router();
const multer = require('multer');
const path = require('path');

const slider1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: slider1 });

const {
  addSlider1Image,
} = require('../Controller/WeddingDestinationController');

weddingdestination.post('/addSlider1Image', upload.single('file'), addSlider1Image);
// weddingdestination.get('/getSlider1Image', getSlider1Image);
// weddingdestination.put('/updateSlider1Image', updateSlider1Image);
// weddingdestination.delete('/deleteSlider1Image', deleteSlider1Image);

module.exports = weddingdestination;