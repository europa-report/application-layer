const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get(`/`, (req, res) => {
  res.send({ message: `hello, world!` });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`); //DevSkim: ignore DS137138
});
