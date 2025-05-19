const express = require('express')
let router = express.Router()

const {createAdminUser,getAdminUser,updateAdminUser,deleteAdminUser} = require('../Controller/AdminUserController')
router.post('/createAdminUser',createAdminUser)
router.post('/getAdminUser',getAdminUser)
router.put('/updateAdminUser',updateAdminUser)
router.delete('/deleteAdminUser',deleteAdminUser)
module.exports = router