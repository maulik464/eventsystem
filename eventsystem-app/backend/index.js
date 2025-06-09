const express = require('express');
const cors = require('cors')
require('dotenv').config()
require('./dbconfig')
const UserRoutes = require('./Router/AdminUserRoute');
const Mainbanner = require('./Router/MainBannerRoute');
const IntroEvents = require('./Router/IntroEventsRoute');
const WeddingDestination = require('./Router/WeddingDestinationRoute')
const Decorators = require('./Router/DecoratorsRoute');

let app = express();
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use('/adminuser',UserRoutes)
app.use('/mainbanner',Mainbanner)
app.use('/introevents',IntroEvents)
app.use('./weddingdestination',WeddingDestination)
app.use('/decorators',Decorators)

app.get('/', (req, res) => {
    try{
        res.status(200).send("Eventsystem Frontend Backend Server Connected successfully");
    }catch{
        res.status(500).send({msg:"Error"});
    }
});

app.listen(process.env.PORT,()=>{
    console.log("Port 5000 Started")
})