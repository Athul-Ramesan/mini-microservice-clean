import { productEntity } from "../../../domain/entities";
import { Product } from "../models/productModel";

export const createProductRepo = async (productDetails: productEntity): Promise<productEntity | null> => {
    try {
        const product = await Product.create(productDetails)
        console.log(product);
        
        return product as productEntity
    } catch (error: any) {
        throw new Error(error);
    }
}