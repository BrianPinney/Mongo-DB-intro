import { client, toysCollection } from "../mongoConnect";

client.connect()

const addToy = async () => {


    const myToy = {
        name: 'Optimus Prime',
        type: 'Transformer',
        cool: true,
        price: 40,
        description: 'Leader Autobot, real cool Red semi truck, with sword',
    }

    const addedToy = await toysCollection.insertOne(myToy)
    console.log(addedToy)
}

addToy()