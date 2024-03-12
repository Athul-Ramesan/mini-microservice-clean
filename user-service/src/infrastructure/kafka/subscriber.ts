import productCreatedConsumer from "./consumers/productCreatedConsumer";

export const createSubscriber = () => {
    return {
        productCreated: productCreatedConsumer
    }
}