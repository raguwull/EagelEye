import express, { json } from "express";
import dotenv from "dotenv";
import pool from "./db.js";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT ?? 8081;
const app = express();
//// Code for socket handling
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(json());

app.post("/signup", async (req, res) => {
  const request = req.body;
  const { username, email, password, usertype } = request;
  try {
    await pool.query(
      "insert into users (username, email, password, usertype) values($1, $2, $3, $4)",
      [username, email, password, usertype]
    );
    console.log("Done");
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
      "select usertype, username from users where username = $1 and password = $2",
      [username, password]
    );
    if (data.rowCount >= 1) {
      res.json({
        message: "success",
        usertype: data.rows[0].usertype,
        username: data.rows[0].username,
      });
    } else {
      res.json("Invalid login");
    }
  } catch (error) {
    console.log(error.detail);
    res.status(200).json(error.detail);
  }
});

app.get("/studenthome/:username/getexams", async (req, res) => {
  const { username } = req.params;
  try {
    const sql = `SELECT e.exam_name, e.proctor_name, e.start_time, e.exam_duration, e.exam_url
  FROM exams e
  JOIN student_exams s ON e.exam_id = s.exam_id
  WHERE s.student_name = '${username}'`;
    const data = await pool.query(sql);
    if (data.rowCount >= 0) {
      res.json({
        message: "success",
        data: data.rows,
      });
    } else {
      res.json({
        message: "failed",
      });
    }
  } catch (error) {
    console.log(error.detail);
    res.status(200).json(error.detail);
  }
});

app.get("/proctorhome/:username/getexams", async (req, res) => {
  const { username } = req.params;
  try {
    const sql = `SELECT e.exam_name, s.student_name, e.start_time, e.exam_duration, e.exam_url
  FROM exams e
  JOIN student_exams s ON e.exam_id = s.exam_id
  WHERE e.proctor_name = '${username}'`;
    const data = await pool.query(sql);
    if (data.rowCount >= 0) {
      res.json({
        message: "success",
        data: data.rows,
      });
    } else {
      res.json({
        message: "failed",
      });
    }
  } catch (error) {
    console.log(error.detail);
    res.status(200).json(error.detail);
  }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(8081, () => {
  console.log("SERVER IS RUNNING");
});

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
