const router = require("express").Router();
const appointmentRouter = require("./appointments.js");
const authorisationRouter = require("./authorisation.js")


router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/about", (req, res, next) => {
    next();
});

router.use("/auth", authorisationRouter)

router.use("/appointments", appointmentRouter)

router.get("/dashboard", (req, res, next) => {
    next()
})

router.get("/search", (req, res, next) => {
    next()
})


module.exports = router