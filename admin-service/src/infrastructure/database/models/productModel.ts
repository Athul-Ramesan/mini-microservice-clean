import mongoose from "mongoose";

interface IProductSchema extends mongoose.Document {
    name: string;
    stock: number;
    description: string;
    price: number;
}

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model<IProductSchema>("product", productSchema);