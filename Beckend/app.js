const dotenv = require('dotenv');
const cors = require('cors');
const express = require("express");
const app = express();


app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;