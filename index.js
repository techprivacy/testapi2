const express = require('express')
const mongoose =require('mongoose')
const app = express()
const port = 3003;
const ProductRoute=require('./Routes/Product')
mongoose.connect('mongodb+srv://yogeshrao:learnandbuild@cluster0.8ev9i1z.mongodb.net/myapp')


app.use('/products',ProductRoute);

app.use((req,res)=>{
    res.send("404 Not Found ")
})

app.listen(port,()=>{console.log("running")})