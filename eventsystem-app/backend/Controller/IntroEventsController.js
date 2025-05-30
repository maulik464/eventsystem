const IntroEvents = require ('../Model/IntroEventsSchema')

const createIntroEvent = (req, res) => {
    let IntroEvent = new IntroEvents({
        comment : req.body.comment,
        youtubelink : req.body.youtubelink
    })
    IntroEvent.save()
    .then(() => {
        res.send({
            isSuccess:true,
            msg: "Intro Events Created",
        })
    })
    .catch((err)=>{
        res.send({
            isSuccess:false,
            msg:"error",err
        })
    })
}

const getIntroEvent = (req, res) => {
    IntroEvents.find()
        .then((events) => {
            res.send({
                isSuccess: true,
                data: events
            });
        })
        .catch((err) => {
            res.send({
                isSuccess: false,
                msg: "Error retrieving events",
                err
            });
        });
};

const updateIntroEvent = (req, res) => {
    IntroEvents.updateOne({_id : req.query.CommentId},req.body)
    .then((data) => {
        res.send({isSuccess: true, msg: "Event updated successfully!"})
    })
    .catch((err) => {
        res.send({msg:"Data Update Failed"})
    })
}

const deleteIntroEvent = (req, res) => {
  IntroEvents.deleteOne({ _id: req.query.CommentId })
    .then((data) => {
      res.send({ msg: "Data Deleted", data });
    })
    .catch((err) => {
      res.status(500).send({ msg: "Delete failed", err });
    });
};


module.exports = {createIntroEvent,getIntroEvent,updateIntroEvent,deleteIntroEvent}