// ./db/seeds/likes_seed.js
exports.seed = function (knex) {
  return knex("likes")
    .del()
    .then(() => {
      return knex("likes").insert([
        {
          id: 1,
          user_id: 1,
          thread_id: 2,
        },
        {
          id: 2,
          user_id: 2,
          comment_id: 1,
        },
        {
          id: 3,
          user_id: 3,
          thread_id: 1,
        },
        {
          id: 4,
          user_id: 1,
          comment_id: 4,
        },
        {
          id: 5,
          user_id: 2,
          thread_id: 5,
        },
      ]);
    });
};
