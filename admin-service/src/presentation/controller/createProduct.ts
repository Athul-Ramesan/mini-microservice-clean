import { NextFunction, Request, Response } from "express"
import { productCreatedProducer } from "../../infrastructure/kafka/producers/productCreatedProducer"


export const createProductController = (dependencies:any)=>{
    const {productUseCases: {createProductUseCase}} = dependencies

    return async (req:Request, res:Response,next:NextFunction)=>{
        try {
            const productDetails = req.body
            const result = await createProductUseCase(dependencies).execute(productDetails)
            await productCreatedProducer(result)
            res.status(201).json({success: true , productDetails: result, message: "product added successfully"});
        } catch (error) {
            next(error);
        }
    }
}