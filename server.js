var express = require('express')
var fallback = require('express-history-api-fallback')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session')
var fallback = require('express-history-api-fallback')
var fileUpload = require('express-fileupload')
require('dotenv').load()

var app = express()
require('./app/config/passport')(passport)
mongoose.connect(process.env.MONGO_URI_TEMP)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/client', express.static(__dirname + '/client'))
app.use('/files', express.static(__dirname + '/../files'))
app.use(session({
	secret: process.env.SESSION_KEY,
	resave: false,
	saveUninitialized: true,
	maxAge: 60000,
	expires: 60000
}));
app.use(passport.initialize())
app.use(passport.session())

require('./app/routes')(app, passport)

app.use(fallback(__dirname + '/client/public/index.html'))

var port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Node.js is listening on port ${port}`)
})
