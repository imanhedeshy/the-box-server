const knex = require("knex")(require("../knexfile").development);

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
      .join("users", "threads.user_id", "users.id");
    return threadsForId;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getThreadsForId };
