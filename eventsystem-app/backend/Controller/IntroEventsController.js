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

const deleteIntroEvent = (req, res) => {
    // Access the ID from the URL params
    const commentId = req.params.Commentid;
    console.log('Received ID:', commentId);

    // Perform the delete operation
    IntroEvents.deleteOne({ _id: commentId })
        .then((data) => {
            if (data.deletedCount > 0) {
                res.send({ msg: "Data Deleted", data });
            } else {
                res.status(404).send({ msg: "Data not found" });
            }
        })
        .catch((err) => {
            res.status(500).send({ msg: "Data not Deleted", err });
        });
};


module.exports = {createIntroEvent,getIntroEvent,deleteIntroEvent}