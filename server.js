const express=require("express")
const app=express()
const cors = require('cors');
const product=require("./routes/product.js")
const {connectDB}=require('./db.js')
const bodyParser = require("body-parser")


app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))

//Routes



//connection
connectDB()

//Middlewares


//routes
app.use('/product',product);

app.listen(8001,()=>{console.log("Server Started at prot 8001")})