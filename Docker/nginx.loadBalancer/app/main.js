const express = require('express')
const os = require('os')

const app = express()

app.get('/', (req, res) => {
  console.log(`traffic coming from ${os.hostname()}`);
  res.send("<h1> App is running </h1>");
})

app.listen('5000', () => {
  console.log("app is running on port 5000 ...")
})