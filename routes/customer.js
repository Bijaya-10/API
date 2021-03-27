const express = require("express");
const router = express.Router();
const customer = require("../models/customer")
const {
    check,
    validationResult
} = require("express-validator");
const bcryptjs = require("bcryptjs");
const {
    JsonWebTokenError
} = require("jsonwebtoken");
const jsonwebtoken = require("jsonwebtoken")



router.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    customer.findOne({
            username: username
        })
        .then(function (customerData) {
            if (customerData === null) {
                //return from here
                return res.status(401).json({
                    message: "invalid credentials",
                    success:false
                })

                //if username exists

            }

            bcryptjs.compare(password, customerData.password, function (err, result) {

                if (result === true) {
                    return res.status(200).json({
                        success: true,
                        data:customerData
                    })
                }

                const token = jsonwebtoken.sign({
                    uid: customerData._id
                }, "secretkey");
                res.status(200).json({
                    message: "auth success!!",
                    token: token
                })

            })

        })
        .catch()





})





router.post("/register", [
    check("firstname", "firstname is required!").not().isEmpty(),
    check("lastname", "lastname is required!").not().isEmpty(),
    check("password", "password is required!").not().isEmpty(),
    check("username", "Email is required!").not().isEmpty(),

], function (req, res) {
    const errors = validationResult(req);

    //valid

    if (errors.isEmpty()) {

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        //const userType = req.body.userType;
        const username = req.body.username;
        const password = req.body.password;


        bcryptjs.hash(password, 10, function (err, hash) {

            const data = new customer({
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: hash
            });
            //userType : userType, 
            console.log(data)
            data.save()
                .then(function (result) {
                    if (result) {
                        res.status(201).json({
                            success: true,
                            message: "data registered successfully!!"
                        })
                    }
                })
                .catch(function (err) {
                    res.status(500).json({
                        success : false,
                        message: err.message
                    })
                })


        })



    } else {
        //invalid
        res.status(400).json({errors : errors.array(), success : false})
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
});




module.exports = router;