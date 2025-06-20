import express from "express";
import bodyParser from "body-parser";
import router, { users } from "./Routes.ts";
import { v4 as uuid } from "uuid";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(users[0].Name + " " + users[0].Age);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: http://localhost:${PORT}`);
});
