
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/DB.js";
import cors from "cors"
import {serve} from "inngest/express";
import { inngest,functions } from "./lib/inngest.js";


dotenv.config();

const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server is running"})
});

app.use('/api/inngest',serve({client:inngest,functions}))

app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is the books endpoint"})
});

//Database Connection

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on Port 3000");
})