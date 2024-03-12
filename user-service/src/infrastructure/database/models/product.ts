import mongoose, {Schema, Document, Types } from "mongoose";

export interface IProductSchema extends Document {
    name: string,
    stock: number,
    description: string,
    price: number,
}

const productSchema: Schema = new Schema({
    name:{ type: String, required: true },
    stock: {
        type: Number,
        required: true
    },
    description: String,
    price: { type: Number, required: true },
});

export const Product = mongoose.model<IProductSchema>("products", productSchema)