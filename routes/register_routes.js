const express = require("express");
const router = express.Router();
const Register = require("../models/register_models")

router.post("/register", function(req, res){
    const fn1 = req.body.fn;
    const ln1 = req.body.ln;
    const email1 = req.body.email;
    const un1 = req.body.un;
    const pw1 = req.body.pw;

    const data = new Register({firstname:fn1, lastname:ln1, email : email1, username : un1, password : pw1});
    data.save();
    res.send("inserted!!")
})
module.exports = router;