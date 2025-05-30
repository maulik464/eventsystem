const express = require('express')
let router = express.Router()

const {createIntroEvent,getIntroEvent,updateIntroEvent,deleteIntroEvent} = require('../Controller/IntroEventsController')
router.post('/createIntroEvent',createIntroEvent)
router.get('/getIntroEvent',getIntroEvent)
router.put('/updateIntroEvent',updateIntroEvent)
router.delete('/deleteIntroEvent',deleteIntroEvent)
module.exports = router