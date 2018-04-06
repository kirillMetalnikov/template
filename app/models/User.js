var mongoose = require('mongoose')

var User = new mongoose.Schema({
    login: String,
    password: {type: String, required: true},
})

module.exports = mongoose.model('user', User)
