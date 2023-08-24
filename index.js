const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const cors = require("cors");

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

app.listen(PORT, () => {
  console.log(`The BOX server is running on port ${PORT}`);
});
