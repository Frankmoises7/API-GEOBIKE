const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const router = require("../router");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));

//Capturar el body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.use(express.json());

app.use(morgan("dev"));

app.use("/", router);

module.exports = app;
