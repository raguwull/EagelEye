import express from "express";
import dotenv from "dotenv";
import pool from "./db.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(cors());

app.get('/home/:userName', async (req, res) => {
    console.log(req.params);
    const userName = req.params.userName;
    try {
        const users = await pool.query('SELECT * FROM users WHERE user_name = $1', [userName]);
        res.json(users.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send("Hi welcome");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});