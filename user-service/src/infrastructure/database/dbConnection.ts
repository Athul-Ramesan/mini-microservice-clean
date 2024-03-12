import mongoose,{connect} from "mongoose";
import { config } from "dotenv";
export default async ()=>{
    config()
    try {
        connect(String(process.env.MONGO_URI).trim())
    } catch (error) {
            throw new Error("Error in connecting user-database");
            
    }
}