const express = require('express')
const router = express.Router()
//import db
const db = require('../models')


router.get('/',(req,res)=>{
    res.render("register")
})

//ading a post  -- .register
router.post('/',(req,res)=>{
  console.log(req.body)
    db.User.create(req.body)
  .then(res.redirect('/'))
  .catch((err)=> res.send(err));
})


module.exports = router;