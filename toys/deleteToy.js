import { client, toysCollection } from "../mongoConnect.js"

const deleteToy = async () => {
    try {
      await client.connect();
      const itemDeleted = await toysCollection.deleteOne({ name: "Optimus Prime" });
      console.log(itemDeleted);
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
  };
  
  deleteToy()