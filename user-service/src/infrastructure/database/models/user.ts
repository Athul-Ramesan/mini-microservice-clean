import mongoose, { Schema,Document } from "mongoose";

export interface IuserSchema extends Document{
    name:String;
    email: String;
    password: String;
    isAdmin: boolean;
    isBlocked:  boolean;
}

const userSchema : Schema = new Schema({
    name:{type:String, required: true},
    email:{ type:String,required: true, unique: true,lowercase:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean ,default:false},
    isBlocked:{type:Boolean, default:false}
});
export const User = mongoose.model<IuserSchema>("user",userSchema)