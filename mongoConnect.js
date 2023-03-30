import dotenv from 'dotenv'

dotenv.config()
const MONGOURI = process.env.MONGOURI
 
import { MongoClient } from "mongodb"

// create instance of Mongo
export const client = new MongoClient(MONGOURI);
