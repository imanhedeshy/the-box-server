// ./db/seeds/comments_seed.js
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(() => {
      return knex("comments").insert([
        {
          id: 1,
          user_id: 2,
          thread_id: 1,
          content: "I like this thread!",
        },
        {
          id: 2,
          user_id: 1,
          thread_id: 2,
          content: "Agreed. Nice thoughts!",
        },
        {
          id: 3,
          user_id: 3,
          thread_id: 1,
          content: "Interesting topic.",
        },
        {
          id: 4,
          user_id: 2,
          thread_id: 3,
          content: "Thanks for sharing!",
        },
        {
          id: 5,
          user_id: 1,
          thread_id: 4,
          content: "I heard it was a great film!",
        },
      ]);
    });
};
