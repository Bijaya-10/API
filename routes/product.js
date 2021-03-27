
const express = require("express");
const product = require("../models/product");
const router = express.Router();
const authenticate_cus = require("../middleware/authenticate_cus")
const photoupload = require("../middleware/photoupload")



router.post("/product/insert", photoupload.single('Book_Image'),function(req, res){
    // authenticate_cus.verifyUser, authenticate_cus.verifyAdmin, 
    console.log(req.file);

    // if(req.file == undefined){
    //     return res.status(400).json({message : "invalid image"})
    // }
    const Book_Name= req.body.Book_Name;
    const Book_Image= req.body.Book_Image;
    const Book_Number = req.body.Book_Number;
    const data = new product({Book_Name:Book_Name,Book_Image:Book_Image, Book_Number: Book_Number});
    data.save()
    .then(function(result){
        res.status(201).json({message: "inserted", success : true})
    })

    .catch(function(e){
        res.status(500).json({message : e.message, success : false})

    })

})

router.get("/product/showproduct", function(req, res){
    product.find().then(function(data){
        res.status(200).json({success:true,data});

    })

    })


router.get("/product/showproduct", function(req,res){
    product.find().then(function(productdata){
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

router.delete("/product/delete/:id",function(req, res){
    // authenticate_cus.verifyAdmin, authenticate_cus.verifyUser, 
 const id = req.params.id;
    product.deleteOne({_id:id})


        .then(function(result){
            res.status(201).json({message: "deleted"})
        })
    
        .catch(function(e){
            res.status(500).json({message : e})
    
    
        });

    })

        


    //     res.status(200).json({message : err})

    //     .catch(function(){
            
    // res.status(200).json({message : err})
    //     })
       




router.put("/product/update/:id", function(req, res){
    const id = req.params.id;
    const Book_Name = req.body.Book_Name
    const Book_Number = req.body.Book_Number
    const Book_Id = req.body.Book_Id
    product.updateOne({_id:id},{Book_Name:Book_Name, Book_Id:Book_Id, Book_Number: Book_Number}).then(function(){
        res.send("updated")
    })

    
})



module.exports = router;