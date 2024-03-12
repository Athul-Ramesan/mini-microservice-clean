import { userEntity } from "../../domain/entities";


export const loginUserUseCase = (dependencies:any)=>{
    const {repositories:{userLoginRepo}} = dependencies;
    
    

    if(!userLoginRepo){
        console.log('inside no userlogin repo');
        throw new Error('Dependency is required for login')
    }
    return {
        execute: async (userCredentials:userEntity)=>{
            try {
                return await userLoginRepo(userCredentials.email)
            } catch (error:any) {
                throw new Error(error.message);
            }
        }
    }
}   




