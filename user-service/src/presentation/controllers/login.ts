import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { userEntity } from "../../domain/entities"
import { compare } from "bcrypt"


export const loginController = (dependencies:any)=>{
    const {useCases:{loginUserUseCase}} = dependencies
    return async (req: Request,res:Response,next:NextFunction)=>{
        try {
            const userCredentials = req.body
            const user:userEntity | null = await loginUserUseCase (dependencies).execute(userCredentials)

            if(!user){
                throw new Error("user doesn't exist")
            }
            const match = await compare(userCredentials.password, user.password)
            if(!match) {
                console.log('password incorrect');
                
                throw new Error("password is incorrect")
            }
            if(user){

                let payload = {
                    _id: user?._id,
                    email: user?.email!
                  };

                  const accessToken = jwt.sign(
                    payload,
                    String(process.env.ACCESS_TOKEN_SECRET),
                    { expiresIn: "1h" }
                  );
                  console.log(accessToken,'token')
    
                  res.cookie("user_jwt", accessToken, {
                    httpOnly: true,
                  });
                  
                res.status(201).json({success:true, data: user, message: "user-logged in "})
            }
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}