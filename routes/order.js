const express = require("express");
const order = require("../models/order");
const router = express.Router();
const authenticate_cus = require("../middleware/authenticate_cus")
const photoupload = require("../middleware/photoupload")



router.post("/order/insert", photoupload.single('Book_Image'),function(req, res){
    // authenticate_cus.verifyUser, authenticate_cus.verifyAdmin, 
    // console.log(req.file);

    // if(req.file == undefined){
    //     return res.status(400).json({message : "invalid image"})
    // }
    const Customer_Name= req.body.Customer_Name;
    // const Book_Image= req.file.filename;
    const Customer_Email = req.body.Customer_Email;
    const Customer_Book= req.body.Customer_Book;
    // const Book_Image= req.file.filename;
    const Customer_Address = req.body.Customer_Address;
    const data = new order({Customer_Name:Customer_Name, Customer_Email: Customer_Email, Customer_Book:Customer_Book,Customer_Address:Customer_Address});
    data.save()
    .then(function(data){
        res.status(201).json({message: "inserted", success : true, data})
    })

    .catch(function(e){
        res.status(500).json({message : e.message, success : false})

    })

})




// router.post("/image/:id", photoupload.single('Book_Image'),function(req, res){


//     const Book_Image= req.file.filename;
//       const data = new product({Book_Image,data:Book_Image});
//       data.save()
  
//       if(req.file == undefined){
//           return res.status(400).json
//           ({
//               message : "invalid image"
//           })
         
  
//           .then(function(result){
//               res.status(201).json({message: "inserted", success : true})
//           })
      
//           .catch(function(e){
//               console.log(e)
//               res.status(500).json({message : e.message, success : false})
      
//           })
//       }
      
  
//       })



      router.post('/image/:id',photoupload.single('Book_Image'), function (req, res) {
        
    
        if (req.file === undefined) {
            return res.status(500).json({
                message: 'invalid image'
            })
        }
        const book = req.file.filename;
       
        order.findByIdAndUpdate({
                _id: req.params.id
            }, {
                Book_Image: book
            })
     
            .then(function (data) {
                res.status(201).json({data,
                    success: true,
                    data:data
                })
            })
            .catch(function (e) {
                res.status(404).json({
                    message: "Invalid image",
                    success: false
                })
     
            })
    })

router.get("/order/fetch", function(req, res){
    order.find().
    then(function(ProductData){
        res.status(200).json({success:true,data:ProductData});

    })

    })


router.get("/order/showall", function(req,res){
    order.find().then(function(productdata){
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


router.get("/order/fetch/single/:id", function(req,res){
const id = req.params.id;
order.findOne({_id : id})
.then(function(data){
res.status(200).json(data)
})
.catch(function(e){
res.status(500).json({error:e})
})

})











//for delete

router.delete("/order/delete/:id",function(req, res){
    // authenticate_cus.verifyAdmin, authenticate_cus.verifyUser, 
 const id = req.params.id;
 console.log(id)
    order.deleteOne({_id:id})


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
       




router.put("/order/update/:id", function(req, res){
    const id = req.params.id;
    const Customer_Name = req.body.Customer_Name
    const Customer_Email = req.body.Customer_Email
    const Customer_Address = req.body.Customer_Address
    const Customer_Book = req.body.Customer_Book


    order.findByIdAndUpdate({_id:id},{Customer_Name:Customer_Name,Customer_Book:Customer_Book,Customer_Email:Customer_Email,Customer_Address:Customer_Address}).then((data)=>{
        res.status(200).json({success:true,message:"Updated"})
    })
})
    



module.exports = router;