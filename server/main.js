const express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  routes = require('./routes'),
  mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:auth/auth')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json({type: '*/*'}))
routes(app)

const port = process.env.PORT || 3090
const server = http.createServer(app)

server.listen(port)

console.log('Server running on', port)
