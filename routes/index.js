const express = require('express')
const router = express.Router();

const friends = ["a","b","c"]

router.get('/', (req,res)=>{
    res.render('index', {friends:friends})
})

router.get('/api',(req,res)=>{
    res.send("this is from index")
})


module.exports = router;