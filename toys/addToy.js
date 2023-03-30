import { client, toysCollection } from "../mongoConnect.js"



const addToy = async () => {


    const myToy = {
        name: 'Scooter',
        type: 'mobile',
        cool: true,
        price: 120,
        description: 'motorized 2 wheel scooter with collapsible handles',
    } 
    try {
        await client.connect()
        const addedToy = await toysCollection.insertOne(myToy)
        console.log(addedToy)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }

}

addToy()