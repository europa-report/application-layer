const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models')

const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get(`/`, (req, res) => {
  res.send({ message: `hello, world!` })
})

db.sequelize.sync({force:true}).then(() => {
  console.log('Drop and re-sync db.')
})

require('./routes/lookup.route')(app)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`) //DevSkim: ignore DS137138
});
