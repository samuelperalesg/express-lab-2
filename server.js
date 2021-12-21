// require dependencies
const express = require('express')
const { send } = require('express/lib/response')
const port = 3000

// initialize the express app
const app = express()

// configure server settings


// configure a data source


// mount middleware


// mount routes
app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send()
})

// tell the app to listen for requests

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`)
})

