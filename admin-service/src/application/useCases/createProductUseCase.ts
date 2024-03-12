import { productEntity } from "../../domain/entities"

export const createProductUseCase = (dependencies:any)=>{
    const {productRepositories: {createProductRepo}} = dependencies
    return{
        execute: async(productDetails:productEntity)=>{
            try {
                return await createProductRepo(productDetails)
            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    }
}