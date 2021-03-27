const mongoose = require("mongoose")
const order = mongoose.model("order",{
    Customer_Name :{
        type :String
    },
    Customer_Email: {
        type : String
    },
    Customer_Book: {
        type : String
    },
    Customer_Address: {
        type : String
    }
})
module.exports = order