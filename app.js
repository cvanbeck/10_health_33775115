const express = require("express");
const mysql = require("mysql2");
const config = require("./utils/config")
const ejs = require("ejs");
const path = require("path")
const mainRoutes = require("./routes/main")

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", mainRoutes)


app.locals.surgery = { name: "Wynell Surgery" }

module.exports = app;