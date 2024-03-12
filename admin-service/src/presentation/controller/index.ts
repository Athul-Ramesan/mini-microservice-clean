import { createProductController } from "./createProduct";

export const controllers = (dependencies:any)=>{
    return {
        createProduct : createProductController(dependencies)
    }
}