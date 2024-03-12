import { userLoginEntity } from "../../../domain/entities/userLoginEntity";
import { userEntity } from "../../../domain/entities";
import { User } from "../models/user";

export const userLoginRepo = async (email:string):Promise < userEntity | null>=>{
    try {

        const existingUser = await User.findOne({email:email})
        if(!existingUser){
            throw new Error("User not found");
        }
        return existingUser as userEntity
    } catch (error:any) {
        console.log('error in catch of login');
        throw new Error(error.message);
        
    }
}