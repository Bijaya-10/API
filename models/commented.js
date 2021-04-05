const mongoose = require("mongoose")//third
const comment = mongoose.model("comment",{
    Names :{
        type :String
    },
    Comments: {
        type : String
    }
})
module.exports = comment