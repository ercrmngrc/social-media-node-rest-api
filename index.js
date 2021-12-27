require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config({path:__dirname+'/.env'});

mongoose.connect(
    String(process.env.MONGO_URL),
    () => {
    console.log("Connected to MongoDB");
    }
);

app.listen(8800, () => {
    console.log("Backend server is running!");
});