// require dependencies
const express = require('express')
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
  let decimal = parseFloat(req.params.tipPercentage/100)
  console.log(decimal)
  let totalTip = parseFloat((req.params.total) * decimal)
  console.log(totalTip)
  res.send(`This is your toal tip: ${totalTip}`)
})



// tell the app to listen for requests

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`)
})