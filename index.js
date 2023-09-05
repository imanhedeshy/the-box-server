const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");

const knex = require("knex")(require("./knexfile").development);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins or specify allowed origins like "http://localhost:3000"
    methods: ["GET", "POST"],
  },
});

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const cors = require("cors");

// const { generateSecretKey } = require("./utils/authentications");

const userRoutes = require("./routes/userRoutes");
const threadRoutes = require("./routes/threadRoutes");

// middlewares
app.use(cors());
app.use(express.json());

app
  .route("/")
  .get((req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  })
  .post((req, res) => {
    console.log("POST request received on root!");
    res.json({ message: "You posted on The BOX!" });
  });

io.on("connection", async (socket) => {
  // Broadcast chat history on connection
  await knex("messages")
    .then((data) => {
      socket.emit("chat history", data);
    })
    .catch((err) => {
      console.log(err);
    });

  socket.on("chat message", async (data) => {
    console.log("message: " + data.message);
    io.emit("chat message", data);
    // Save message to database
    await knex("messages")
      .insert({
        name: data.username,
        message: data.message,
        timestamp: new Date(),
      })
      .then(() => {
        console.log("Message saved to database");
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

app.use("/users", userRoutes);
app.use("/threads", threadRoutes);

/*Create a 256-bit secret key
const secretKey = generateSecretKey();
console.log(secretKey);*/

server.listen(PORT, "0.0.0.0", () => {
  console.log(`The BOX server is running on port ${PORT}`);
});
