const express = require("express");
const app = express();
const db = require("./models");
const lookups = require("./routes/lookup.route");
const infos = require("./routes/info.route");
const port = process.env.PORT || 8080;
const chalk = require("chalk");

app.get(`/`, (_, res) => {
    res.send({ message: `Welcome to the Europa Report!` });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.use(lookups);
app.use(infos);

app.listen(port, () => {
    console.log(chalk.green.bold(`App running at http://localhost:${port}`)); //DevSkim: ignore DS137138
});
