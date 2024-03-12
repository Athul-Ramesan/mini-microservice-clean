import express,{Application,Request,Response} from "express"
import {config} from "dotenv"
import {userRoutes} from "../infrastructure/routes/userRoutes"
import dependencies from "../config/dependencies"
import cookieParser from "cookie-parser"
config()

const app: Application = express()
const PORT:number = Number(process.env.PORT)




app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/',(req:Request, res:Response)=>{
    res.status(200).json({message:"<< User service is running ! >>"})
})
app.use('/user',userRoutes(dependencies))

app.listen(PORT,()=>{
    console.log(`<< User service connected to Port ${PORT} >>`);
})

export default app