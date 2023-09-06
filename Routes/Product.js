const express = require('express');
const router=express.Router();
const Product =require('../Models/Product.model')
router.use(express.json())
router.get('/',(req,res)=>{
    res.send("Product Data received")
})
router.post('/',(req,res)=>{
    const product =new Product({
        name :req.body.name,
        price:req.body.price
    })
product.save().then(result=>{ res.send("Created")})
   
})


module.exports=router;