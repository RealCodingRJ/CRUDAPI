import express from "express";
import bodyParser from "body-parser";
import router from "./Routes.ts";
import { v4 as uuid } from "uuid";
import { GetData } from "./DB/DB.ts";
import { users } from "./Routes.ts";

function getMappedData(data: any[]): string[] {
  return data.map((e) => e);
}

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

try {
  const data = GetData(users.toString());
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}

app.get("/", (req, res) => {
  const Data = getMappedData(users);
  res.send(Data);
});

app.post("/", (req, res) => {
  const Data = getMappedData(users);
  res.send(Data);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: http://localhost:${PORT}`);
});
