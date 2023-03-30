import { client, fruitsCollection } from "../mongoConnect.js";

const addFruit = async () => {
  const myFruit = {
    name: "Cherry",
    taste: "Sweet",
    price: 4.29,
    stock: 13,
  };

  try {
    await client.connect();
    const addedFruit = await fruitsCollection.insertOne(myFruit);
    console.log(addedFruit);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

addFruit();
