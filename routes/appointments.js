router = require("express").Router()


router.get("/", (req, res, next) => {
    // List all appointments
    next()
})

router.get("/:id", (req, res, next) => {
    // List a specific one
    next()
})

router.get("/add", (req, res, next) => {
    // Page to add new appointment
    res.render("add.ejs")
})

router.post("/add", (req, res, next) => {
    // Submits to database
    res.send("Appointment added succesful")
})

router.get("/cancel", (req, res, next) => {
    // Page to cancel appointment
})

router.put("/cancel", (req, res, next) => {
    // Updates appointment to cancelled
    next()
})


module.exports = router