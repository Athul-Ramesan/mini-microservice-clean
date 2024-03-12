import { ObjectId } from "mongoose";
import { Product } from "../../database/models/product";

export default async (
    data: {
        _id: ObjectId;
        name: string;
        stock: number;
        description: string;
        price: number;
    }
)=>{
    try {
        const product = new Product({
            _id: data._id,
            name: data.name,
            stock: data.stock,
            description: data.description,
            price: data.price
        })
        console.log(product,'product');
        

        await product.save()
    } catch (error: any) {
        console.log("product creation at product service error",error?.message);
    }
}