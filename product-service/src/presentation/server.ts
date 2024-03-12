import express,{Application, NextFunction, Request, Response} from "express"
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import dependencies from '../config/dependencies'
config()
import { adminRoutes } from "../infrastructure/routes/adminRoutes"
const app:Application = express()

const PORT : number= Number(process.env.PORT) || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
      const errorResponse = {
      errors: [{ message: 'Something went wrong' }],
    };
  
    return res.status(500).json(errorResponse);
  })

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({
        message:"admin service running !"
    })
})
app.use('/admin',adminRoutes(dependencies))
app.listen(PORT,()=>{
    console.log(`Admin service listening to the port ${PORT}`);
})
export default app
