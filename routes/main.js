const router = require("express").Router();
const appointmentRouter = require("./appointments.js");
const authenticationRouter = require("./authentication.js")
const redirectLogin = require("../utils/authenticationHelpers.js")


router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/about", (req, res, next) => {
    res.render("about.ejs");
});


router.use("/auth", authenticationRouter)

// All routers from here onwards require authentication
// Basic authorisation check 
// TODO
router.use("/appointments", redirectLogin, appointmentRouter)

router.get("/dashboard", (req, res, next) => {
    next()
})

router.get("/search", (req, res, next) => {
    next()
})


module.exports = router