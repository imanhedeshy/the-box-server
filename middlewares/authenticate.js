// middlewares/authenticate.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { isValidJwt } = require("../utils/validators");

const jwtSecretKey = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  const reqAuth = await req.header("Authorization");
  if (!reqAuth)
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized: Missing token" });
  try {
    const token = reqAuth.split(" ")[1];
    const decodedToken = await isValidJwt(token);

    if (!decodedToken) {
      res
        .status(401)
        .json({ success: false, error: "Unauthorized: Invalid token" });
    } else {
      req.body = { ...decodedToken, ...req.body };
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

module.exports = { verifyToken };
