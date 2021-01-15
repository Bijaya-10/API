const mongoose = require("mongoose")//third
const express = require("express")//third party module
const bodyParser = require("body-parser")//core module

const db = require("./database/db")
const register_routes = require("./routes/register_routes")


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(register_routes)




//const data = new User({firstname : "ram", address : "ktm"});
//data.save();

app.listen(90)