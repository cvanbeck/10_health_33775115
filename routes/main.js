const router = require("express").Router();
const appointmentRouter = require("./appointments.js");

// All routers get passed through here
router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/about", (req, res, next) => {
    next();
});

router.get("/login", (req, res, next) => {
    res.render("login.ejs");
});

router.post("/loginattempt", (req, res, next) => {
    next()
})

router.get("/register", (req, res, next) => {
    next()
});

router.post("/registered", (req, res, next) => {
    next()
})

router.get("/dashboard", (req, res, next) => {
    next()
})

router.get("/search", (req, res, next) => {
    next()
})

// External routers
router.use("/appointments", appointmentRouter)


module.exports = router