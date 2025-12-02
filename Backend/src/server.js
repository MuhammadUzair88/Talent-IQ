
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app=express();

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server is running"})
})

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on Port 3000");
})