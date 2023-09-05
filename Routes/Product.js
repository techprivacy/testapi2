const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Product Data received")
})
router.post('/',(req,res)=>{
    res.send("Created")
})


module.exports=router;