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

app.get("/magic/:question", (req, res) => {
  const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

  let randomIdx = Math.floor(Math.random * (answers.length))

  res.send(`<h1> Your question: ${req.params.question}  &  Your Answer: ${answers[randomIdx]} <h1>`)
})

// tell the app to listen for requests

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`)
})