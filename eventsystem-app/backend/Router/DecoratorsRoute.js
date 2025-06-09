const express = require('express');
const decorator = express.Router();
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
  addNewDecorator,
  getDecorators,
  deleteDecorator
} = require('../Controller/DecoratorsController');

decorator.post('/addNewDecorator', upload.single('file'), addNewDecorator);

decorator.get('/getDecorators', getDecorators);

decorator.post('/deleteDecorator', deleteDecorator);

module.exports = decorator;
