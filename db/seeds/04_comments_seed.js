exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        {
          id: 1,
          user_id: 1,
          thread_id: 1,
          content: "This is a comment by Iman on thread 1.",
          created_at: knex.fn.now(),
        },
        {
          id: 2,
          user_id: 2,
          thread_id: 1,
          content: "This is a comment by John Doe on thread 1.",
          created_at: knex.fn.now(),
        },
        {
          id: 3,
          user_id: 3,
          thread_id: 2,
          content: "This is a comment by Jane Doe on thread 2.",
          created_at: knex.fn.now(),
        },
        {
          id: 4,
          user_id: 1,
          thread_id: 3,
          content: "This is a comment by Iman on thread 3.",
          created_at: knex.fn.now(),
        },
        {
          id: 5,
          user_id: 2,
          thread_id: 4,
          content: "This is a comment by John Doe on thread 4.",
          created_at: knex.fn.now(),
        },
        {
          id: 6,
          user_id: 3,
          thread_id: 5,
          content: "This is a comment by Jane Doe on thread 5.",
          created_at: knex.fn.now(),
        },
        {
          id: 7,
          user_id: 1,
          thread_id: 6,
          content: "This is a comment by Iman on thread 6.",
          created_at: knex.fn.now(),
        },
      ]);
    });
};
