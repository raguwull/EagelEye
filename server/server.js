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

app.post("/login", async (req, res) => {
    const request = req.body;
    const { username, password } = request;
    try {
      const data = await pool.query(
        "select * from users where username = $1 and password = $2",
        [username, password]
      );
      if (data.rowCount >= 1){
        console.log(data.rowCount);
        res.json("success");
      }
      else{
        res.json("Invalid login");
      }
    } catch (error) {
      console.log(error.detail);
      res.status(200).json(error.detail);
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
