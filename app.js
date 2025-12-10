const express = require("express");
const mysql = require("mysql2");
const config = require("./utils/config")
const ejs = require("ejs");
const path = require("path")
const mainRoutes = require("./routes/main")
const session = require("express-session")

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret:config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

app.use(function(req, res, next) {
  res.locals.account_type = req.session.account_type;
  next();
});


const db = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10
})

global.db = db

app.use("/", mainRoutes)


app.locals.surgery = { name: "Wynell Surgery" }

module.exports = app;