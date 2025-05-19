const Mainbanner = require('../Model/MainBannerSchema');

const addNewBanner = (req, res) => {
  try {
    const imageText = req.body.text;
    const file = req.file;
    const bannerposition = req.body.bannerposition;

    // if (!imageText || !file) {
    //   return res.status(400).send({
    //     isSuccess: false,
    //     msg: "Text or image is missing",
    //   });
    // }

    const newBanner = new Mainbanner({
      imagetext: imageText,
      image: file.filename,
      bannerposition:bannerposition
    });

    newBanner
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

const getBanner = (req, res) => {
  Mainbanner.find()
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ msg: "Error getting banners", err });
    });
};

const updateBanner = (req, res) => {
  Mainbanner.updateOne({ _id: req.query.Mainbannerid }, req.body)
    .then((data) => {
      res.send({ msg: "Banner Updated", data });
    })
    .catch((err) => {
      res.status(500).send({ msg: "Update failed", err });
    });
};

const deleteBanner = (req, res) => {
  Mainbanner.deleteOne({ _id: req.query.Mainbannerid })
    .then((data) => {
      res.send({ msg: "Banner Deleted", data });
    })
    .catch((err) => {
      res.status(500).send({ msg: "Delete failed", err });
    });
};

module.exports = {addNewBanner,getBanner,updateBanner,deleteBanner};
