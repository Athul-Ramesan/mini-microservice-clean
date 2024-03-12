import jwt from "jsonwebtoken"

export default (payload:{userId:string, userEmail: string, isAdmin:boolean,isBlocked:boolean})=>{
    return jwt.sign(payload, String(process.env.AUTH_JWT_SECRETE)),{expiresIn:60*60*24}
}
