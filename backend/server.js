const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/delivery', { useNewUrlParser: true });
const connection = mongoose.connection;

mongoose.connection.once('open', function () {
  console.log("MongoDB database connection established successfully!");
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});