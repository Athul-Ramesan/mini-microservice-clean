import server from "./presentation/server"
import dbConnection from "./infrastructure/database/dbConnection"
import { runConsumer } from "./infrastructure/kafka/consumer"

(async () => {
    try {
        server
        await dbConnection()
        await runConsumer()
            .catch((err:any)=>{
                console.log("error while starting consumer",err);
                process.exit()
            })
    } catch (error:any) {
        console.log(error, 'Error on starting app');
        throw new Error("Error on starting app", error);
    }finally{
        process.on('SIGINT',async()=>{
            console.log('\n\nserver is shutting down');
            process.exit()
        })
    }
})()