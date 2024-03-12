import  {userEntity}  from "../../domain/entities"
export const signupUseCase=(dependencies:any)=>{
    const {repositories: {userSignupRepo}} = dependencies

    if(!userSignupRepo){
        console.log('inside no usersignup repo');
        
        throw new Error('Dependency is required for signup')
    }
    const execute = async(credentials:userEntity)=>{
        try {
            return await userSignupRepo(credentials)
        } catch (error:any) {
            throw new Error(error?.message)
        }
    }
    return {execute}
}