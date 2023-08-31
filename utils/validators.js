const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const isStrong = (password) => {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.length <= 8) return false;
  return passwordPattern.test(password);
};

const isValidJwt = (token) => {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
    if (decodedToken.exp <= Date.now() / 1000) return false;
    else return decodedToken;
  } catch (error) {
    console.error("Error validating token:", error);
  }
};

module.exports = { isValidEmail, isStrong, isValidJwt };
