import { Router } from "express";
import express from "express";
import fs from "fs";
import path from "path";
import { GetData } from "./DB/DB.ts";

const router = express.Router();

export const users = [
  {
    Name: "Ryan",
    Age: 25,
    isAdmin: true,
  },
];

export default { router };
