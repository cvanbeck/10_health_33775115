router = require("express").Router()
const { seperateUsersByRole, getAppointments, cancelAppointment, appointmentAttended } = require("../utils/appointmentUtils.js")


// Page to add new appointment
router.get("/add", (req, res, next) => {
    let query = `SELECT 
                    users.id, users.first_name, users.last_name, users.account_type, departments.name
                FROM users 
                    LEFT JOIN doctors ON users.id = doctors.user_id
                    LEFT JOIN departments ON doctors.department_id = departments.id;`
    
    db.query(query, (err, users) => {
        if (err) return next(err);
        let seperated = seperateUsersByRole(users)
        res.render("add.ejs", { patients : seperated.pat, doctors : seperated.doctor })
    })
})

// Submits to database
router.post("/add", (req, res, next) => {
    let record = [req.body.patient, req.body.doctor, req.body.time, req.body.date]
    let query = `INSERT INTO appointments 
                    (patient_id, doctor_id, time, date)
                VALUES
                    (?, ?, ?, ?)`

    db.query(query, record, (err, result) => {
        if (err) { return next(err) }
        res.render('appointment_booked.ejs')
    })
})

// Updates appointment to cancelled
router.post("/cancel", (req, res, next) => {
    cancelAppointment(req.body.id, () => {
        getAppointments(req, res, next, req.body.id, ( appointments ) => {
            res.render("cancelled.ejs", { appointments })
        })
    })
})

router.post("/attended", (req, res, next) => {
    appointmentAttended(req.body.id, () => {
        getAppointments(req, res, next, req.body.id, ( appointments ) => {
            res.render("attended.ejs", { appointments })
        })
    })
})

// Search appointments
router.get('/search', function(req, res, next){
    res.render("search.ejs")
});

router.get('/search_result', function (req, res, next) {
    //searching in the database
    let search = `%${req.query.search_text}%`;
    let sqlQuery = `
        SELECT 
            users.id, users.first_name, users.last_name, users.account_type, departments.name
        FROM users 
            LEFT JOIN doctors ON users.id = doctors.user_id
            LEFT JOIN departments ON doctors.department_id = departments.id
        WHERE last_name LIKE ? 
        AND account_type = "doctor"
        `
    db.query(sqlQuery, search, (err, results) => {
        if (err) { return next(err) }
        console.log(results)
        res.render("search_result.ejs", { results })

    })
});

// List all appointments
router.get("/", (req, res, next) => {
    getAppointments(req, res, next, -1, (appointments) => {
        res.render("appointments.ejs", { appointments })
    })
})

// List a specific one
router.get("/:id", (req, res, next) => {
    getAppointments(req, res, next, req.params.id, (appointments) => {
        res.render("appointments.ejs", { appointments })
    })
})
module.exports = router