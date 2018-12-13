//connection file to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aldb');

module.exports.User = require('./user')
module.exports.FLIGHT = require('./flight')

