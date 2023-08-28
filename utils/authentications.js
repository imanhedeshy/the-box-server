const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const HASH_SECRET_KEY = process.env.HASH_SECRET_KEY;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

// Generate a 256-bit secret key
const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

// Create a JWT
const createToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET_KEY, {
    expiresIn: "30h",
  });
};

// Hash password
const hashPassword = async (password) => {
  return await bcrypt.hash(
    password,
    parseInt(SALT_ROUNDS) /*, (err, hash) => {
    if (err) console.error("Error hashing password:", err);
    else {
      console.log("Password hashed sucessfully!");
      return hash;
    }
  }*/
  );
};

const passwordsMatch = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

module.exports = { generateSecretKey, createToken, hashPassword, passwordsMatch };
