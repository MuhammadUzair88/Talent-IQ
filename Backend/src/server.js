
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/DB.js";


dotenv.config();

const app=express();


app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server is running"})
});

app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is the books endpoint"})
});

//Database Connection

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on Port 3000");
})