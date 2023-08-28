// userRoutes.js to handle /users requests
const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
  hashPassword,
  createToken,
  passwordsMatch,
} = require("../utils/authentications");
const {
  createUser,
  findUser,
  getProfileById,
} = require("../controllers/userController");
const { isValidEmail } = require("../utils/validators");
const { verifyToken } = require("../middlewares/authenticate");

// POST /users/register to sign up for a new account
router.route("/register").post(async (req, res) => {
  const { name, username, email, password, user_type, bio } = req.body;

  if (
    !username ||
    !username.trim("") ||
    !email ||
    !email.trim("") ||
    !password ||
    !password.trim("")
  ) {
    res
      .status(406)
      .json({ success: false, error: "All fields are necessary!" });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(406).json({ success: false, error: "Invalid email type!" });
    return;
  }

  // Hash password
  const password_hash = await hashPassword(password);

  const newUser = {
    name: name,
    username: username,
    email: email,
    password_hash: password_hash,
    user_type: user_type,
    bio: bio,
  };

  try {
    const result = await createUser(newUser);
    if (result.code === "ER_DUP_ENTRY") {
      res
        .status(409)
        .json({ success: false, error: "Username or email already exists!" });
      return;
    } else {
      try {
        if (result[0]) {
          const token = createToken({ id: result[0], ...newUser });
          res.status(201).json({
            success: true,
            message: "User registered successfully.",
            id: result[0],
            token: token,
          });
          return;
        } else throw new Error();
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: "Internal server error!" });
        return;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, Error: "Internal server error!" });
  }
});

// POST /users/login to sign in
router.route("/login").post(async (req, res) => {
  const user = req.body;
  try {
    const result = await findUser(user);
    if (result.code === "NOT_FOUND")
      res.status(409).json({ success: false, error: result.message });
    else if (!passwordsMatch(user.password, result.password_hash))
      res.status(406).json({
        success: false,
        error: "Incorrect username or password!",
      });
    else {
      try {
        if (result) {
          const token = createToken(result);
          res.status(201).json({
            success: true,
            message: "Logged in successfully.",
            id: result.id,
            token: token,
          });
        } else throw new Error();
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: "Internal server error!" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error!" });
  }
});

// GET /users get all users; only for Odin
router.route("/").get(verifyToken, (req, res) => {
  console.log(req.body);
  console.log(req.user);
  res.json({ message: "Here come the users!" });
});

router.route("/:username").get(verifyToken, async (req, res) => {
  const paramsUsername = req.params.username;
  const user = await getProfileById(req.user.id);
  if (user.username === paramsUsername) res.json({ success: true, user: user });
  else res.status(401).json({ success: false, error: "Unauthorized access!" });
});

module.exports = router;
