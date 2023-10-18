const express = require("express");
const router = express.Router();

const {
  getThreadsForId,
  createThread,
  likeThreadById,
  createCommentForId,
  deleteThreadById,
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
      else return res.json({ threads: threads, you: req.body.username });
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

router
  .route("/:id")
  .post(verifyToken, async (req, res) => {
    const comment = {
      user_id: req.body.id,
      thread_id: parseInt(req.params.id),
      content: req.body.content,
    };
    try {
      const result = await createCommentForId(comment);
      console.log(result);
      res.json(result);
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  })
  .delete(verifyToken, async (req, res) => {
    try {
      const thread_id = req.params.id;
      await deleteThreadById(thread_id);

      res.status(204).json({ message: "Thread deleted successfully." });
    } catch (error) {
      console.error("Error deleting thread:", error);
      res
        .status(500)
        .json({ message: "An error occurred while deleting the thread." });
    }
  });

module.exports = router;
