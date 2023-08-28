// middlewares/authenticate.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = async (req, res, next) => {
  const reqAuth = await req.header("Authorization");
  console.log(reqAuth)
  if (!reqAuth)
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized: Missing token" });
  try {
    const token = reqAuth.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

module.exports = { verifyToken };
