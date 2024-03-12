import { Router } from "express";
import {controllers} from '../../presentation/controller/index'

export const adminRoutes = (dependencies:any)=>{
    const {createProduct} = controllers(dependencies)

    const router = Router()
    router.route('/addProduct')
        .post(createProduct)

    return router    
}