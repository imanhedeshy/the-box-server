const knex = require("knex")(require("../knexfile").development);

const getThreadsForId = async (thread_id) => {
  try {
    const threadsWithComments = await knex("threads")
      .select(
        "threads.id as thread_id",
        "threads.content as thread_content",
        "threads.created_at as created_at",
        "users.username as user_username",
        "users.name as user_name",
        knex.raw("COUNT(DISTINCT likes.id) as likes_count"),
        knex.raw(
          "JSON_ARRAYAGG(JSON_OBJECT('content', comments.content, 'user_name', comment_users.name, 'created_at', comments.created_at)) as comments"
        )
      )
      .leftJoin("likes", "threads.id", "likes.thread_id")
      .leftJoin("users as like_users", "likes.user_id", "like_users.id")
      .leftJoin("comments", "threads.id", "comments.thread_id")
      .leftJoin(
        "users as comment_users",
        "comments.user_id",
        "comment_users.id"
      )
      .join("users", "threads.user_id", "users.id")
      .groupBy("threads.id")
      .orderBy("threads.created_at", "desc");

    threadsWithComments.forEach((thread) => {
      if (thread.comments) {
        const uniqueComments = new Set();

        thread.comments = thread.comments.filter((comment) => {
          if (comment.created_at && !uniqueComments.has(comment.content)) {
            uniqueComments.add(comment.content);
            return true;
          }
          return false;
        });

        thread.comments.sort((b, a) =>
          (a.created_at || "").localeCompare(b.created_at || "")
        );
      }
    });

    return threadsWithComments;
  } catch (error) {
    console.error(error);
  }
};

const createThread = async (content) => {
  try {
    const [newThreadId] = await knex("threads").insert(content);
    const insertedThread = await knex("threads")
      .where("threads.id", newThreadId)
      .select(
        "threads.id as thread_id",
        "threads.content as thread_content",
        "threads.created_at as created_at",
        "users.username as user_username",
        "users.name as user_name"
      )
      .leftJoin("likes", "threads.id", "likes.thread_id")
      .leftJoin("users as like_users", "likes.user_id", "like_users.id")
      .join("users", "threads.user_id", "users.id")
      .groupBy("threads.id")
      .select(knex.raw("COUNT(DISTINCT likes.id) as likes_count"))
      .orderBy("threads.created_at", "desc")
      .first();
    return insertedThread;
  } catch (error) {
    console.error("Error inserting thread:", error);
  }
};

const likeThreadById = async (like) => {
  try {
    const result = await knex("likes").insert(like);
    return result[0];
  } catch (error) {
    "Error creating the like record in likes table!", error;
  }
};

const createCommentForId = async (comment) => {
  try {
    const [comment_id] = await knex("comments").insert(comment);

    const insertedComment = await knex("comments")
      .select(
        "comments.*",
        "users.username as user_username",
        "users.name as user_name"
      )
      .where("comments.id", comment_id)
      .join("users", "users.id", "comments.user_id")
      .first();

    return insertedComment;
  } catch (error) {
    console.error("Error creating comment in db:", error);
    throw error;
  }
};

const deleteThreadById = async (thread_id) => {
  try {
    await knex("comments").where("thread_id", thread_id).delete();
    await knex("likes").where("thread_id", thread_id).delete();

    await knex("threads")
      .where("threads.id", thread_id)
      .delete()
      .then(() => true);
  } catch (error) {
    console.error("Error deleting thread:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the thread." });
  }
};

module.exports = {
  getThreadsForId,
  createThread,
  likeThreadById,
  createCommentForId,
  deleteThreadById,
};
