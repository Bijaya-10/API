const mongoose = require("mongoose")//third
const Product = mongoose.model("Product",{
    Book_Name :{
        type :String
    },
    Book_Number: {
        type : String
    },
    Book_Image :{
    type : String
    }


})
module.exports = Product;