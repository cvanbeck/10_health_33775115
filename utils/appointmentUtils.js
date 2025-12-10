// Seperates given table based on account_type field
function seperateUsersByRole(users) {
    const seperated = {};
    users.forEach(user => {
        const key = user.account_type
        if (!(key in seperated)) {
            // Adds new array with same key as account_type value
            seperated[key] = [];
        }
        seperated[key].push(user);
    });
    return seperated;
}

function getAppointments(req, res, next, id, callback) {
    let query = `SELECT
                    appointments.id,
                    appointments.time,
                    appointments.date,
                    appointments.is_cancelled,
                    appointment_attended,
                    p.first_name AS pfirst,
                    p.last_name AS plast,
                    d.first_name AS dfirst,
                    d.last_name AS dlast,
                    departments.name AS department
                FROM appointments
                    INNER JOIN users as p ON appointments.patient_id = p.id
                    INNER JOIN users as d ON appointments.doctor_id = d.id
                    INNER JOIN doctors ON appointments.doctor_id = doctors.user_id
                    INNER JOIN departments ON doctors.department_id = departments.id
                WHERE 
                    (appointments.patient_id = ? OR appointments.doctor_id = ?`;
    // Check if an id was specified, if so selects only that item 
    query += id === -1 ? ")" : ` AND appointments.id = ?)`;
    
    const values = [req.session.user_id, req.session.user_id, id]
    db.query(query, values, (err, result) => {
        if (err) return next(err);
        callback(result);
    });
}

const cancelAppointment = (id, callback) => {
    let query = `
        UPDATE appointments
        SET is_cancelled = 1
        WHERE id = ?
    `
    db.query(query, id, (err, result) => {
        if (err) return next(err);
        callback()
    })
}

const appointmentAttended = (id, callback) => {
    let query = `
        UPDATE appointments
        SET appointment_attended = 1
        WHERE id = ?
    `
    db.query(query, id, (err, result) => {
        if (err) return next(err);
        callback()
    })
}

module.exports = {seperateUsersByRole, getAppointments, cancelAppointment, appointmentAttended}
