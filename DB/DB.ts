import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017";
const client = new MongoClient(URI);

export async function GetData(data: string) {
  try {
    const db = client.db("API");
    const col = db.collection("Routes");
    return await col.insertOne({ code: data });

    client.close();
  } catch (err) {
    console.log(err);
  }
}
