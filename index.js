const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const knex = require("knex")(require("./knexfile").development);

const cors = require("cors");

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

require("dotenv").config();
const PORT = process.env.PORT || 8080;

// Import the socket handler
const socketHandler = require("./sockets/socketHandler");
socketHandler(io, knex);

// middlewares
app.use(cors());
app.use(express.json());

//routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`The BOX server is running on port ${PORT}`);
});
