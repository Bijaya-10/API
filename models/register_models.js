const mongoose = require("mongoose");
const Register = mongoose.model("Register",{
    firstname :{
        type :String
    },
    lastname :{
        type : String
    },
    address : {
        type : String
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String
    },
    username:{
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
    

})
module.exports = Register;
