exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("likes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("likes").insert([
        { id: 1, user_id: 1, thread_id: 1, comment_id: null },
        { id: 2, user_id: 2, thread_id: null, comment_id: 1 },
        { id: 3, user_id: 3, thread_id: 2, comment_id: 2 },
      ]);
    });
};
