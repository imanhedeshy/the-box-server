const express = require("express");
const router = express.Router();

const {
  getThreadsForId,
  createThread,
  likeThreadById,
} = require("../controllers/threadController");
const { verifyToken } = require("../middlewares/authenticate");

router
  .route("/")
  .get(verifyToken, async (req, res) => {
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
  })
  .post(verifyToken, async (req, res) => {
    const thread = { user_id: req.body.id, content: req.body.content };
    const newThread = await createThread(thread);
    res.json(newThread);
    res.status(200);
  })
  .put(verifyToken, async (req, res) => {
    const like = { user_id: req.body.id, thread_id: req.body.thread_id };
    const result = await likeThreadById(like);
    res.json({ success: true, like_id: result });
  });

module.exports = router;
