import { client, fruitsCollection } from "../mongoConnect.js"

const addFruit = async () => {
  const myFruit = {
    name: "apple",
    taste: "sour",
    price: 8.29,
    stock: 1002,
  };

  try {
    await client.connect()
    const addedFruit = await fruitsCollection.insertOne(myFruit)
    console.log(addedFruit)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

addFruit()
