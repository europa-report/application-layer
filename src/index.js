const express = require('express')
const app = express()
const db = require('./models')
const bodyParser = require("body-parser")
const lookups = require('./routes/lookup.route')
const infos = require('./routes/info.route')
const port = process.env.PORT || 8080
const chalk = require('chalk')

app.get(`/`, (req, res) => {
  res.send({ message: `Welcome to the Europa Report!` })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.sequelize.sync({force:true}).then(() => {
  console.log('Drop and re-sync db.')
})

app.use(lookups)
app.use(infos)

app.listen(port, () => {
  console.log(chalk.green.bold(`App running at http://localhost:${port}`)) //DevSkim: ignore DS137138
});
