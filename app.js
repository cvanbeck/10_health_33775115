const express = require("express");
const mysql = require("mysql2");
const config = require("./utils/config")
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

module.exports = app;