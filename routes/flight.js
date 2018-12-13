const express = require('express');
const router = express.Router();
const db = require('../models');

//test route to check if it is working 
router.get('/test',(req,res)=>{
res.send("my test route for flights is working")
})

router.get('/home',(req,res)=>{
    res.render('flight')
})

//get all flights from database
router.get('/',(req,res)=>{
    db.FLIGHT.find()
    .then((flight)=> res.json(flight))
    // then(res.render("flight",{flight:flight}))
    .catch((err)=> res.send(err))
});

//adding a new flight 
router.post('/',(req,res)=>{
    db.FLIGHT.create(req.body)
    .then((res.redirect('/flight/home')))
    .catch((err)=> res.send(err))
});

//get a flight by Id -- flight/123412341234
router.get('/:id', (req,res)=>{
    id = req.params.id
    console.log(req.params)
    db.FLIGHT.findById(id)
    .then((flight)=>res.json(flight))
    .catch((err)=> res.send(err))
})

//update 
router.put('/:id',(req,res)=>{
    db.FLIGHT.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((flight)=>res.json(flight))
    .catch((err)=> res.send(err))
})

//delete 
router.delete('/:id',(req,res)=>{
    db.FLIGHT.findByIdAndRemove({_id:req.params.id},req.body)
    .then(res.send("deleted"))
    .catch((err)=> res.send(err))
})


module.exports = router;