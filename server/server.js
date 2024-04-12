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
    const users = await pool.query("insert into users ", [
      userName,
    ]);
    res.json("Rows: ", users.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  console.log(username, email, password);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
