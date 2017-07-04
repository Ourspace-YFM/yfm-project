const express = require('express')
const router = express.Router()

router.get('/profiles',(res,req)=>{
  res.json({message: "Hi"})
})

module.exports = router
