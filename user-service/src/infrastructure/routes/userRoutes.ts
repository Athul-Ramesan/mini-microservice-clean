import { Router,Request,Response } from "express";
import { controllers } from "../../presentation/controllers";


export const userRoutes = (dependencies:any)=>{

    const {signup,login} = controllers(dependencies)
    const router = Router()
    
    router.route("/signup")
        .post(signup);
    router.route('/login')   
        .post(login) 
    return router
}
