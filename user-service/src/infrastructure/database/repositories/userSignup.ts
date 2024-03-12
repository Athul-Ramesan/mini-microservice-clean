import { User } from "../models/user";
import { userEntity } from "../../../domain/entities";

export const userSignupRepo = async (credentials:userEntity) : Promise <userEntity | null> =>{
    try {
        const userData = await User.create(credentials)

        return userData as userEntity
    } catch (error:any) {
        throw new Error(error?.message)
    }
}