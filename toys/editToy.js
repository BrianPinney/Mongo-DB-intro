import {client, toysCollection} from "../mongoConnect.js"

client.connect()

const editToy = async () => {
    const updatedToy = await toysCollection.findOneAndUpdate(
      { name: "Scooter" }, { $set: { name: "Razor"} }
    );
    console.log(updatedToy);
  };
  
  editToy();