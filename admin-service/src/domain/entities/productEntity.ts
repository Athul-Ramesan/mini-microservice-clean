import { Types } from "mongoose";

export interface productEntity{
    _id?: Types.ObjectId;
    name: string;
    stock: number;
    price:number;
    description: string
}