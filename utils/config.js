require("dotenv").config();

const PORT = process.env.PORT || 8000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


module.exports = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME }