const router = require("express").Router()
const bcrypt = require("bcrypt")
const config = require("../utils/config")
const redirectLogin = require("../utils/authenticationHelpers")


router.get("/login", (req, res, next) => {
    res.render("login.ejs")
});

router.post("/login", (req, res, next) => {
    let query = `
        SELECT hashed_password, id, account_type
        FROM users 
        WHERE username = ?
        `
    db.query(query, req.body.username, (err, result) => {
        if (err) { return next(err) }
        if (!result[0]) { return res.send("User not found") }
        
        bcrypt.compare(req.body.password, result[0].hashed_password, (err, equal) => {
            if (err) return next(err);
            if (equal){
                req.session.user_id = result[0].id
                req.session.account_type = result[0].account_type
                // Makes account_type available in all ejs templates
                res.locals.account_type = req.session.account_type;
                res.send('Login Successful. Return  <a href='+'../'+'>Home</a>')
            } else {
                res.send('Login Unsuccesful Return  <a href='+'../'+'>Home</a>')
            }
        })
    })
})

router.get("/logout", redirectLogin, (req, res) => {
    req.session.destroy(err => {
        if (err) return res.redirect("")
    });
    res.send('you are now logged out. <a href='+'../'+'>Home</a>')
})

router.get("/register", (req, res, next) => {
    res.render("register.ejs")
});

router.post("/registered", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashed_password) => {
        if(err){ 
            console.log("ERROR")
            return res.send(err) 
        }
        let query1 = `
            INSERT INTO users 
                (email, username, hashed_password, account_type, first_name, last_name)
            VALUES(?, ?, ?, ?, ?, ?)
        `

        let newRecord = [
            req.body.email,
            req.body.username,
            hashed_password,
            "pat",
            req.body.first,
            req.body.last
        ]

        db.query(query1, newRecord, (err, result) => {
            if (err){ return res.send(err)}
            let query2 = `
                INSERT INTO patients (user_id, date_of_birth)
                VALUES(LAST_INSERT_ID(), ?)
            `
            db.query(query2, req.body.dob, (err2, result2) => {
                if (err2){
                    return res.send(err2)
                }
                res.send('You have now registered. <a href='+'../'+'>Home</a>')
            })
        })
    })
});


module.exports = router