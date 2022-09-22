const express = require('express')
const app=express()
app.use(express.json())
const connectDB = require('./config/connectDB')
const cors = require("cors");

// const port=process.env.port
connectDB()
app.use(cors())
app.use('/',require("./routes/userRoutes"))
app.listen(5000,()=>{
    console.log(`runing on port 5000`)
})
