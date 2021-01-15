const mongoose = require("mongoose");
const Register = mongoose.model("Register",{
    firstname :{
        type :String
    },
    address : {
        type : String
    },
    email:{
        type : String
    },
    image : {
        type : String
    },
    username:{
        type : String
    },
    password: {
        type : String
    }
    

})
module.exports = Register;
