const router = require("express").Router()
const bcrypt = require("bcrypt")


router.get("/login", (req, res, next) => {
    res.render("login.ejs")
});

router.post("/login", (req, res, next) => {
    let query = "SELECT hashed_password FROM users WHERE username = ?"
    db.query(query, req.body.username, (err, result) => {
        if (err) return next(err);
        if (!result[0]) return res.send("User not found");
        
        bcrypt.compare(req.body.password, result[0].hashed_password, (err, equal) => {
            if (err) return next(err);
            if (equal){
                res.send("Login Successful")
            } else {
                res.send("Login Unsuccesful")
            }
        })
    })
})

router.get("/register", (req, res, next) => {
    next()
});

router.post("/register", (req, res, next) => {
    next()
});


module.exports = router
