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

const passwordsMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) return false;
  return true;
};

module.exports = { isValidEmail, isStrong, passwordsMatch };
