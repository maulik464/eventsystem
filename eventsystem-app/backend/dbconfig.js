let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mmdholariya1998:maulik.4807@mauliknode.n3ixxo4.mongodb.net/eventsystem?retryWrites=true&w=majority&appName=mauliknode',{})
.then(() => {
    console.log("Eventsystem Database Connected")
})
.catch((err)=>{
    console.log("Error",err)
})