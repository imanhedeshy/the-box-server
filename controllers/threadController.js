const knex = require("knex")(require("../knexfile").development);
const { findUser } = require("./userController");

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
          "JSON_ARRAYAGG(JSON_OBJECT('content', comments.content, 'user_name', comment_users.name)) as comments"
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

const createCommentForId = async (thread_id, user_id, comment_content) => {};

module.exports = {
  getThreadsForId,
  createThread,
  likeThreadById,
  createCommentForId,
};
