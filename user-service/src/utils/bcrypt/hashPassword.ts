import { hash,genSalt } from "bcrypt";

export const hashPassword = async (password:string)=>{
    try {
        const hashedPassword = await hash(password, await genSalt(10))

        if(!hashedPassword){
            console.log('hashing password error');
            
            throw new Error("password hashing error");
            
        }
        return hashedPassword
    } catch (error:any) {
        throw new Error(error.message);
                
    }
}