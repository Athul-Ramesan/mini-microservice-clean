import { Types } from "mongoose";


export interface userEntity{
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isBlocked: boolean;
}