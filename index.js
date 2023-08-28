const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const cors = require("cors");

const { generateSecretKey } = require("./utils/authentications");

const userRoutes = require("./routes/userRoutes");
const threadRoutes = require("./routes/threadRoutes");

// middlewares
app.use(cors());
app.use(express.json());

app
  .route("/")
  .get((req, res) => {
    res.json({ message: "This is The BOX!" });
  })
  .post((req, res) => {
    console.log("POST request received on root!");
    res.json({ message: "You posted on The BOX!" });
  });

app.use("/users", userRoutes);
app.use("/threads", threadRoutes);

/*Create a 256-bit secret key
const secretKey = generateSecretKey();
console.log(secretKey);*/

app.listen(PORT, () => {
  console.log(`The BOX server is running on port ${PORT}`);
});
