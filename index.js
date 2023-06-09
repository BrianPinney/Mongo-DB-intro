import { client } from "./mongoConnect.js";

//connect to the client

// connect to db -  or create if there is one


const addFruit = async () => {
  const myFruit = {
    name: "apple",
    taste: "dry",
    price: 2.29,
    stock: 56,
  };

  const addedFruit = await collection.insertOne(myFruit);
  console.log(addedFruit);
};

// addFruit();



const getAllFruits = async () => {
  try {
    await client.connect();
    const allFruits = await collection.find().toArray();
    console.log(allFruits);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};
//   collection
//     .find()
//     .toArray()
//     .then((items) => console.log(items))
//     .catch(err => console.log(err));
// getAllFruits();

const deleteFruit = async () => {
  try {
    await client.connect();
    const itemDeleted = await collection.deleteOne({ name: "apple" });
    console.log(itemDeleted);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

// deleteFruit()
