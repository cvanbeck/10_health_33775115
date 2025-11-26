router = require("express").Router()


// List all appointments
router.get("/", (req, res, next) => {
    // This query grabs a bunch of data and inner joins it all to make a joint table
    // Is there a better way to do this?? idk
    let query = `
        SELECT
            appointments.id,
            appointments.time,
            appointments.date,
            p.first_name AS pfirst,
            p.last_name AS plast,
            d.first_name AS dfirst,
            d.last_name AS dlast,
            departments.name AS department
        FROM appointments
            INNER JOIN users as p ON appointments.patient_id = p.id
            INNER JOIN users as d ON appointments.doctor_id = d.id
            INNER JOIN doctors ON appointments.doctor_id = doctors.user_id
            INNER JOIN departments ON doctors.department_id = departments.id;
    `
    db.query(query, (err, result) => {
        if(err) return next(err);
        res.render("appointments.ejs", { appointments: result })
    })
})

router.get("/:id", (req, res, next) => {
    // List a specific one
    next()
})

// Page to add new appointment
router.get("/add", (req, res, next) => {
    let query = `
        SELECT users.id, users.first_name, users.last_name, users.account_type, departments.name
        FROM users 
        LEFT JOIN doctors ON users.id = doctors.user_id
        LEFT JOIN departments ON doctors.department_id = departments.id;
    `
    db.query(query, (err, result) => {
        if (err) return next(err);

        let info = {
            patients: [],
            doctors: []
        }
        result.forEach(user => {
            user.account_type === "doctor" ? info.doctors.push(user) : info.patients.push(user)
        })

        res.render("add.ejs", { patients : info.patients, doctors : info.doctors })
    })
})

router.post("/add", (req, res, next) => {
    // Submits to database

    query = `
        INSERT INTO appointments (patient_id, doctor_id, time, date)
        VALUES(?, ?, CURTIME(), CURDATE())
    `
    let record = [
        req.body.patient,
        req.body.doctor
    ]

    db.query(query, record, (err, result) => {
        console.log(result)
        if (err) return next(err);
        next()
        res.render('appointment_booked.ejs')
    })
})

router.get("/cancel", (req, res, next) => {
    // Page to cancel appointment
})

router.put("/cancel", (req, res, next) => {
    // Updates appointment to cancelled
    next()
})


module.exports = router