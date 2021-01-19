const express = require("express");
const router = express.Router();
const Register = require("../models/register_models")
const {check, validationResult} = require("express-validator");
const bcryptjs = require("bcryptjs");

router.post("/register", [
    check("email", "Email is required!").not().isEmpty(),
    check("email", "It is not valid!" ).isEmail()
], function(req, res){
    const errors = validationResult(req);

    if(errors.isEmpty()){




    const fn1 = req.body.fn;
    const ln1 = req.body.ln;
    const email1 = req.body.email;
    const un1 = req.body.un;
    const pw1 = req.body.pw;

    bcryptjs.hash(password, 10, function(err, hash){
        
    const data = new Register({firstname:fn1, lastname:ln1, email : email1, username : un1, password : hash});
    data.save();

      
    })

    }
    else{

        res.send(errors.array())
    }
    //res.send(errors.array())

    //const fn1 = req.body.fn;
    //const ln1 = req.body.ln;
    //const email1 = req.body.email;
    //const un1 = req.body.un;
    //const pw1 = req.body.pw;

    //const data = new Register({firstname:fn1, lastname:ln1, email : email1, username : un1, password : pw1});
    //data.save();
    //res.send("inserted!!")
})
module.exports = router;