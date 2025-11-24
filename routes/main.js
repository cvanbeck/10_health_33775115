const router = require("express").Router();

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

router.get("/register", (req, res, next => {
    res.render("register.ejs")
}))

router.post("/registered", (req, res, next) => {
    next()
})

router.get("/dashboard", (req, res, next) => {
    next()
})

router.get("/appointments", (req, res, next) => {
    next()
})

router.get("/appointments/:id", (req, res, next) => {
    next()
})

router.post("/addappointment", (req, res, next) => {
    next()
})

router.post("/cancelappointment", (req, res, next) => {
    next()
})

router.get("/search", (req, res, next) => {
    next()
})



module.exports = router