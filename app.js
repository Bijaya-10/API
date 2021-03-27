const mongoose = require("mongoose")//third
const express = require("express")//third party module
const bodyParser = require("body-parser")//core module
const cors = require("cors");
const db = require("./database/db")
const customer = require("./routes/customer")
const product = require("./routes/product")
const order = require("./routes/order")



const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customer)
app.use(product)
app.use(order)






app.listen(90);