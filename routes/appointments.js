router = require("express").Router()
const { seperateUsersByRole, renderAppointments } = require("../utils/appointmentUtils.js")


// Page to add new appointment
router.get("/add", (req, res, next) => {
    let query = `SELECT 
                    users.id, users.first_name, users.last_name, users.account_type, departments.name
                FROM users 
                    LEFT JOIN doctors ON users.id = doctors.user_id
                    LEFT JOIN departments ON doctors.department_id = departments.id;`
    
    db.query(query, (err, result) => {
        if (err) return next(err);
        let info = seperateUsersByRole(result)
        res.render("add.ejs", { patients : info.pats, doctors : info.doctors })
    })
})

// Submits to database
router.post("/add", (req, res, next) => {
    let record = [req.body.patient, req.body.doctor, req.body.time, req.body.date]
    query = `INSERT INTO appointments 
                (patient_id, doctor_id, time, date)
            VALUES
                (?, ?, ?, ?)`

    db.query(query, record, (err, result) => {
        if (err) return next(err);
        res.render('appointment_booked.ejs')
    })
})

// Page to cancel appointment
router.get("/cancel", (req, res, next) => {
})

// Updates appointment to cancelled
router.put("/cancel", (req, res, next) => {
    next()
})

// List all appointments
router.get("/", (req, res, next) => {
    renderAppointments(res, next)
})

// List a specific one
router.get("/:id", (req, res, next) => {
    renderAppointments(res, next, req.params.id)
})

module.exports = router