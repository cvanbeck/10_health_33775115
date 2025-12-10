const router = require("express").Router()
const bcrypt = require("bcrypt")
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
    next()
});

router.post("/register", (req, res, next) => {
    next()
});


module.exports = router
