import {producer} from './index'

export const productCreatedProducer = async (
    data: {
        _id: string;
        name: string;
        stock: string;
        description: string;
        price: string;
    }
)=>{
    try {
        producer.connect()
        console.log('inside producer====================================================');
        

        const messages=[
            {
                topic: 'to-user',
                messages:[{
                    key:'productCreated',
                    value:JSON.stringify(data)
                }]
            },
            {
                topic:'to-product',
                messages:[{
                    key:'productCreated',
                    value:JSON.stringify(data)
                }]
            }
        ]
        await producer.sendBatch({topicMessages:messages})
    } catch (error:any) {
        console.error('kafka produce error', error?.message);
    }finally{
        await producer.disconnect();
    }
}