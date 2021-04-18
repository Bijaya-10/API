const mongoose = require("mongoose")//third
mongoose.set('useFindAndModify', false);
const express = require("express")//third party module
const bodyParser = require("body-parser")//core module
const cors = require("cors");
const path = require("path")

const db = require("./database/db")
const customer = require("./routes/customer")
const product = require("./routes/product")
const order = require("./routes/order")
const commented = require("./routes/commented")
const publicDir = path.join(__dirname,"public")

const app = express();

app.use(express.static(publicDir))
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(customer)
app.use(product)
app.use(order)
app.use(commented)






app.listen(90);