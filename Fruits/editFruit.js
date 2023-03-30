import {client, fruitsCollection} from "../mongoConnect.js"
client.connect()
const editFruit = async () => {
    const updatedFruit = await fruitsCollection.findOneAndUpdate(
      { name: "Pineapple" },
      { $set: { name: "Watermelon", special: true } }
    );
    console.log(updatedFruit);
  };
  
  editFruit();