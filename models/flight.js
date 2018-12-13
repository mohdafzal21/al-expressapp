const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

    name : String,
    price : Number

})

const FLIGHT = mongoose.model("FLIGHT", flightSchema)

module.exports = FLIGHT;