router = require("express").Router()


// Functions
function seperateUsersByRole(users){
    // Seperates given table based on account_type field
    let seperated = {}
    users.forEach(user => {
        if (!(user.account_type in seperated)){
            // Adds new array with same key as account_type value
            seperated[`${user.account_type}s`] = []
        }
        seperated[`${user.account_type}s`].push(user)
    })
    return seperated
}

function renderAppointments(res, next, id=-1){
        let query = `SELECT
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
                        INNER JOIN departments ON doctors.department_id = departments.id`

    // Check if an id was specified, if so selects only that item 
    query += id === -1 ? "" : `WHERE appointments.id = ?`

    db.query(query, id, (err, result) => {
        if(err) return next(err);
        res.render("appointments.ejs", { appointments: result })
    })
}


// Routers
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
        console.log(info)
        res.render("add.ejs", { patients : info.pats, doctors : info.doctors })
    })
})

// Submits to database
router.post("/add", (req, res, next) => {
    let record = [req.body.patient, req.body.doctor]
    query = `INSERT INTO appointments 
                (patient_id, doctor_id, time, date)
            VALUES
                (?, ?, CURTIME(), CURDATE())`

    db.query(query, record, (err, result) => {
        if (err) return next(err);
        next()
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