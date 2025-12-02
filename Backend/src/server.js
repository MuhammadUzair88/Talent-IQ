
import express from "express";
import dotenv from "dotenv";
import Path from "path";

dotenv.config();

const app=express();

const __dirname=Path.resolve()

app.get("/health",(req,res)=>{
    res.status(200).json({msg:"Server is running"})
});

app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is the books endpoint"})
});

//make our app ready for deployment

if(process.env.NODE_ENV==="production"){
    app.use(express.static(Path.join(__dirname,"../Frontend/dist")))

    app.get("/{*any}",(req,res)=>{
       res.sendFile(Path.join(__dirname,"../Frontend","dist","index.html"));   
    })
}


app.listen(process.env.PORT,()=>{
    console.log("Server is Running on Port 3000");
})