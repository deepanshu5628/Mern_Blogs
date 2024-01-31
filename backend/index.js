const express=require("express");
const app=express();
const mongoose=require("mongoose");

// requring cors
const cors=require("cors");
app.use(cors());

// basic initization
app.use(express.json());
app.use(express.urlencoded({extends:true}));
// requring env file
require("dotenv").config();
let port=process.env.PORT || 8080;
// starting server
app.listen(port,()=>{
    console.log("app is listening on port ",port);
});
// connecting db
const startdb=require("./Models/startdb");
startdb();


// requring routers
const blogsrouter=require("./Router/blogsrouter");
app.use("/api/v1",blogsrouter);




// error handlering
app.use((err,req,res,next)=>{
    res.status(500).json({
        success:false,
        message:err,
    })
});