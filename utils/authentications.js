const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const HASH_SECRET_KEY = process.env.HASH_SECRET_KEY;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

// Generate a 256-bit secret key
const generateSecretKey = async () => {
  return await crypto.randomBytes(32).toString("hex");
};

// Create a JWT
const createToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
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
  return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = { generateSecretKey, createToken, hashPassword, passwordsMatch };
