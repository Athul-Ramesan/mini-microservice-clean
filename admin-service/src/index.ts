require("dotenv").config()
import server from './presentation/server'
import  dbConnection  from './infrastructure/database/dbConnection'

(async () => {
    try {
        server;
        await dbConnection()

    } catch (error: any) {
        console.log('failed to config admin service', error?.message);

    }finally{
        process.on('SIGINT',async()=>{
            console.log('\n\nserver is shutting down');
            process.exit()
        })
    }
})()