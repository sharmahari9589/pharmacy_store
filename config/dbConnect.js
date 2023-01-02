import mongoose from "mongoose";
import "dotenv/config"
export const configureDb = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI,{
            
        });
        console.log("db connected");
    } catch (error) {
        console.error(error);
    }
}