const router = require("express").Router();
const appointmentRouter = require("./appointments.js");
const authenticationRouter = require("./authentication.js")


router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/about", (req, res, next) => {
    next();
});

router.use("/auth", authenticationRouter)

// All routers from here onwards require authentication
// Basic authorisation check
router.use((req, res, next) => {
    if(authorisation=true){
        next()
    } else {
        res.send("NOT LOGGED IN")
    }
})

router.use("/appointments", appointmentRouter)

router.get("/dashboard", (req, res, next) => {
    next()
})

router.get("/search", (req, res, next) => {
    next()
})


module.exports = router