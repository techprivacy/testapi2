const express = require('express')
const app = express()
const port = 3003;
const ProductRoute=require('./Routes/Product')

app.use('/products',ProductRoute);

app.use((req,res)=>{
    res.send("404 Not Found ")
})

app.listen(port,()=>{console.log("running")})