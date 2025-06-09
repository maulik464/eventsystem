const Weddingdestination = require('../Model/WeddingDestinationSchema');

const addSlider1Image = (req, res) => {
  try {
    const file = req.file;

    const newSlider1 = new Weddingdestination({
      slider1: file.filename
    });

    newSlider1
      .save()
      .then(() => {
        res.send({
          isSuccess: true,
          msg: "Banner Created",
        });
      })
      .catch((err) => {
        res.status(500).send({
          isSuccess: false,
          msg: "Error saving banner",
          err,
        });
      });
  } catch (err) {
    res.status(500).send({
      isSuccess: false,
      msg: "Server error",
      err,
    });
  }
};

module.exports = {addSlider1Image};