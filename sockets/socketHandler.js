// sockets/socketHandler.js

module.exports = (io, knex) => {
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
};
