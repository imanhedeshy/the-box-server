const knex = require("knex")(require("../knexfile").development);

// const getThreadsForId = async (id) => {
//   try {
//     const threadsForId = await knex("threads")
//       .select(
//         "threads.id as thread_id",
//         "threads.content as thread_content",
//         "threads.created_at as created_at",
//         "users.username as user_username",
//         "users.name as user_name"
//       )
//       .join("users", "threads.user_id", "users.id");
//     return threadsForId;
//   } catch (error) {
//     console.error(error);
//   }
// };

const getThreadsForId = async (id) => {
  try {
    const threadsForId = await knex("threads")
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
      .orderBy("threads.created_at", "desc");

    return threadsForId;
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

module.exports = { getThreadsForId, createThread };
