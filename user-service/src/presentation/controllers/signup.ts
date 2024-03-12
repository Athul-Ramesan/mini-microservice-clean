import { NextFunction, Request, Response } from "express"
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import jwt from "jsonwebtoken";
export const signupController = (dependencies: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const { useCases: { signupUseCase } } = dependencies;
        try {
            const userCredentials = req.body;
            userCredentials.password = await hashPassword(userCredentials.password);

           const result = await signupUseCase(dependencies).execute(userCredentials)
            if(!result){
                throw new Error("error in creating user");
            }else{
                const payload ={
                    _id:String(result?._id),
                    email:result?.email!,
                    role:result?.role!
                }
                const accessToken = jwt.sign(payload,String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: "1h" })
                res.cookie('user_jwt',accessToken,{httpOnly:true})
            }

            res.status(201).json({message:'User created successfully',success:true, user: result })

        } catch (error: any) {
            console.log('inside controller signup');

            throw new Error(error.message);
        }
    }
}