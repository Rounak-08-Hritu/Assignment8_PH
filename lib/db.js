import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function dbConnect() {
  await client.connect();
  return client.db("suncart");
}