const express = require('express')
let router = express.Router()

const {createIntroEvent,getIntroEvent} = require('../Controller/IntroEventsController')
router.post('/createIntroEvent',createIntroEvent)
router.get('/getIntroEvent',getIntroEvent)
module.exports = router