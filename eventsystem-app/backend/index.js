const express = require('express');
const cors = require('cors')
require('dotenv').config()
require('./dbconfig')
const UserRoutes = require('./Router/AdminUserRoute');
const Mainbanner = require('./Router/MainBannerRoute');
const IntroEvents = require('./Router/IntroEventsRoute');

let app = express();
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use('/adminuser',UserRoutes)
app.use('/mainbanner',Mainbanner)
app.use('/introevents',IntroEvents)

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