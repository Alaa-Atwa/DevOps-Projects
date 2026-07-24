const express = require('express')
const mongoose = require('mongoose')

const app = express()

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const URI = 'mongodb://username:password@host:port/database?options...'
const DB_port = 27017

mongoose.connect()


app.get("/", (req, res) => {
  res.send('server is running ')
})

app.listen('8000', () => {
  console.log('listening on port 8000')
})

