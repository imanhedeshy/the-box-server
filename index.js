var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var knex = require("knex")(require("./knexfile").development);
var cors = require("cors");
var Server = require("socket.io").Server;
var io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
require("dotenv").config();
var PORT = process.env.PORT || 8080;
// Import the socket handler
var socketHandler = require("./sockets/socketHandler");
socketHandler(io, knex);
// middlewares
app.use(cors());
app.use(express.json());
//routes
var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);
server.listen(PORT, "0.0.0.0", function () {
    console.log("The BOX server is running on port ".concat(PORT));
});
