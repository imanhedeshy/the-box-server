const express = require("express");
const router = express.Router();

const { getThreadsForId } = require("../controllers/threadController");
const { verifyToken } = require("../middlewares/authenticate")

router.route("/").get(verifyToken, async (req, res) => {
  try {
    const threads = await getThreadsForId();
    if (!threads)
      return res
        .status(403)
        .json({ success: true, message: "No threads found." });
    else return res.json(threads);
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error!" });
  }
});

module.exports = router;
