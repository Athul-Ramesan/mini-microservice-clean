import { loginController } from "./login";
import { signupController } from "./signup";

export const controllers = (dependencies:any)=>{
    return{
        signup:signupController(dependencies),
        login:loginController(dependencies)
    }
}