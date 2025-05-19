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

module.exports = {createIntroEvent,getIntroEvent}