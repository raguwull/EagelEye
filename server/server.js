import express, { json } from "express";
import dotenv from "dotenv";
import pool from "./db.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT ?? 8081;
const app = express();

app.use(cors());
app.use(json());

app.post("/signup", async (req, res) => {
  const request = req.body;
  const { username, email, password } = request;
  try {
    await pool.query(
      "insert into users (username, email, password) values($1, $2, $3)",
      [username, email, password]
    );
    res.json("success");
  } catch (error) {
    console.log(error.detail);
    res.status(200).json(error.detail);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
