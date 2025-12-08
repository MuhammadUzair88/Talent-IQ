import { chatClient } from "../lib/stream.js"

export const getStreamToken= async(req,res)=>{

    try{
        //use clerkid for stream not mongodb id beacuse we have store the user on stream using clerkid in beginnning
        
        const token=chatClient.createToken(req.user.clerkId);
        res.status(200).json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image
        })
    }
    catch(e){
        console.log("Error generating stream token:", e);
        res.status(500).json({error:"Internal Server Error"});
    }
}