const Decorator = require('../Model/DecoratorsSchema');

const addNewDecorator = (req, res) => {
  console.log(req.body);
  try {
    const details = req.body.details;
    const file = req.file;
    
    const newDecorator = new Decorator({
      details: details,
      image: file.filename,
    });

    newDecorator
      .save()
      .then(() => {
        res.send({
          isSuccess: true,
          msg: "Decorator Created",
        });
      })
      .catch((err) => {
        res.status(500).send({
          isSuccess: false,
          msg: "Error saving Decorator",
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

const getDecorators = (req, res) => {
  Decorator.find()
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ msg: "Error getting banners", err });
    });
};

const deleteDecorator = (req, res) => {
  Decorator.deleteOne({ _id: req.query.DecoratorId })
    .then((data) => {
      res.send({ msg: "Decorator Deleted", data });
    })
    .catch((err) => {
      res.status(500).send({ msg: "Delete failed", err });
    });
};

module.exports = {addNewDecorator, getDecorators, deleteDecorator};
