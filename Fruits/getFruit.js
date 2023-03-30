import { client, fruitsCollection } from "../mongoConnect.js";

const getAllFruits = async () => {
    
    try {
      await client.connect();
      const allFruits = await fruitsCollection.find().toArray();
      console.log(allFruits);
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
    
  };
  
  getAllFruits();