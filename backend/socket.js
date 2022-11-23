// should be first, else process.env is empty
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.use(async (socket, next) => {
  if (socket.handshake.query && socket.handshake.query.accessToken) {
    try {
      console.log(socket.handshake.query.accessToken);

      return next();
    } catch (error) {
      console.log(error);
    }
  }

  const error = new Error("Authentication error");

  error.data = { type: "accessToken required" };

  next(error);
});
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3002, () => {
  console.log("Chat server is running!");
});
