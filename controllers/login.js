exports.getLogin = (req, res, next) => {
    res.render('login');

}

exports.postLogin = (req, res, next) => {
    res.send("Login Successful");
    console.log(req.body.username);
    console.log(req.body.password);

}