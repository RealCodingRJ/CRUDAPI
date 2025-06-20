import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017";
const client = new MongoClient(URI);

export async function GetData(data: string) {
  const db = client.db("API");
  const col = db.collection("Routes");
  return await col.insertOne({ code: data });

  client.close();
}
