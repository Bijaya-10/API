
const express = require("express");
const order = require("../models/order");
const router = express.Router();
const authenticate_cus = require("../middleware/authenticate_cus")
const photoupload = require("../middleware/photoupload")


router.post("/order/insert", function(req, res){
    //photoupload.single('Book_Image'),
    // authenticate_cus.verifyUser, authenticate_cus.verifyAdmin, 
    // console.log(req.file);

    // if(req.file == undefined){
    //     return res.status(400).json({message : "invalid image"})
    // }
    const Customer_Name= req.body.Customer_Name;
    const Customer_Email = req.body.Customer_Email;
    const Customer_Book = req.body.Customer_Book;
    Customer_Address = Customer_Address
    const data = new order({Customer_Name:Customer_Name, Customer_Email:Customer_Email, Customer_Address:Customer_Address, Customer_Book: Customer_Book});
    data.save();
    res.send("inserted")

})

router.get("/product/fetch", function(req, res){
    staff.find().then(function(productdata){
        res.send(productdata);

    })

    })

router.get("/product/fetchall", function(req,res){
    staff.find().then(function(productdata){
    const Book_Name = productdata.Book_Name;
    
        res.status(200).json({
            message : "ok",
            Book_Name : Book_Name,
        
        })
    })
    .catch(function(e){
        res.status(500).json({
            error : e
        })
    })
})







//for delete

router.delete("/order/delete/:id",function(req, res){
    // authenticate_cus.verifyAdmin, authenticate_cus.verifyUser, 
 const id = req.params.id;
    order.deleteOne({_id:id})
    .then(function(){
        res.send("deleted")


    //     res.status(200).json({message : err})

    //     .catch(function(){
            
    // res.status(200).json({message : err})
    //     })
       

    });

})



router.put("/order/update/:id", function(req, res){
    const id = req.params.id;
    const Customer_Book = req.body.Customer_Book
    const Customer_Name = req.body.Customer_Name
    const Customer_Email = req.body.Customer_Email
    order.updateOne({_id:id},{Customer_Email:Customer_Email, Customer_Name:Customer_Name, Customer_Book:Customer_Book}).then(function(){
        res.send("updated")
    })

    
})










module.exports = router