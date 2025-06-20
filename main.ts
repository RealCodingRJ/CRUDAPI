import express from "express";
import bodyParser from "body-parser";
import router, { users } from "./Routes.ts";
import { v4 as uuid } from "uuid";
import { GetData } from "./DB/DB.ts";

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

const data = GetData(users.toString());
app.get("/", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: http://localhost:${PORT}`);
});
