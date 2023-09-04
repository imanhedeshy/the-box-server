const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");

const { Server } = require("socket.io");
const io = new Server(server);

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

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.use("/users", userRoutes);
app.use("/threads", threadRoutes);

/*Create a 256-bit secret key
const secretKey = generateSecretKey();
console.log(secretKey);*/

server.listen(PORT, () => {
  console.log(`The BOX server is running on port ${PORT}`);
});
