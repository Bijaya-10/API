const mongoose = require("mongoose");
const customer = mongoose.model("customer",{
    firstname :{
        type :String
    },
    lastname :{
        type : String
    },
    username:{
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true,
    },
    // userType :{
    //     type : String,
    //     enum : ["Admin", "Customer", "Staff"]
    // }
    
   
    

})
module.exports = customer;