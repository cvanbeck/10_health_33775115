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
    next()
})

router.post("/add", (req, res, next) => {
    // Submits to database
    next()
})

router.get("/cancel", (req, res, next) => {
    // Page to cancel appointment
})

router.put("/cancel", (req, res, next) => {
    // Updates appointment to cancelled
    next()
})


module.exports = router