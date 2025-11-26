router.get("/login", (req, res, next) => {
    res.render("login.ejs");
});

router.post("/login", (req, res, next) => {
    next()
})

router.get("/register", (req, res, next) => {
    next()
});

router.post("/register", (req, res, next) => {
    next()
});
