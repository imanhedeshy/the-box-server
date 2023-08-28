const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const comparePasswords = async (plainPassword, hashhedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashhedPassword);
  return isMatch;
};

module.exports = { hashPassword, comparePasswords };
