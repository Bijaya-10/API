
const express = require("express");
const comment = require("../models/commented");
const router = express.Router();
const authenticate_cus = require("../middleware/authenticate_cus")
const photoupload = require("../middleware/photoupload")



router.post("/comment/insert", photoupload.single('Book_Image'),function(req, res){
    // authenticate_cus.verifyUser, authenticate_cus.verifyAdmin, 
    // console.log(req.file);

    // if(req.file == undefined){
    //     return res.status(400).json({message : "invalid image"})
    // }
    const Names= req.body.Names;
    // const Book_Image= req.file.filename;
    const Comments = req.body.Comments;
    const data = new comment({Names:Names, Comments:Comments});
    data.save()
    .then(function(result){
        res.status(201).json({message: "inserted", success : true})
    })

    .catch(function(e){
        res.status(500).json({message : e.message, success : false})

    })

})

router.get("/comment/fetch", function(req, res){
    product.find().
    then(function(ProductData){
        res.status(200).json({success:true,data:ProductData});

    })

    })


router.get("/comment/showall", function(req,res){
    comment.find().then(function(productdata){
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


router.get("/comment/fetch/single/:id", function(req,res){
const id = req.params.id;
comment.findOne({_id : id})
.then(function(data){
res.status(200).json(data)
})
.catch(function(e){
res.status(500).json({error:e})
})

})











//for delete

router.delete("/comment/delete/:id",function(req, res){
    // authenticate_cus.verifyAdmin, authenticate_cus.verifyUser, 
 const id = req.params.id;
 console.log(id)
    comment.deleteOne({_id:id})


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
       




router.put("/comment/update/:id", function(req, res){
    const id = req.params.id;
    const Book_Name = req.body.Book_Name
    const Book_Number = req.body.Book_Number

    comment.updateOne({_id:id},{Book_Name:Book_Name,Book_Number: Book_Number}).then(function(){
        res.send()
        .then(function(result){
            res.status(201).json({message: "updated", success : true})
        })
    
        .catch(function(e){
            res.status(500).json({message : e.message, success : false})
    
        })
    })

    
})



module.exports = router;