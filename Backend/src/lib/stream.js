import {StreamChat} from 'stream-chat';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.log("Stream API Key and Secret must be set in environment variables");
}

export const chatClient=StreamChat.getInstance(apiKey,apiSecret);

export const createStreamUser=async(userData)=>{
    try{
        await chatClient.upsertUser(userData);
        console.log("Stream User upserted successfully",userData);
    }
    catch(error){
        console.log("Error upserting user to Stream:",error);   
    }
}

export const deleteStreamUser=async(userId)=>{
    try{
        await chatClient.deleteUser(userId)
        console.log("Stream User deleted successfully");
    }
    catch(error){
        console.log("Error deleting user from Stream:",error);
    }
        
}
