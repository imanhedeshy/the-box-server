exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("threads")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("threads").insert([
        {
          id: 1,
          user_id: 1,
          content: "This is the first thread created by Iman.",
          created_at: knex.fn.now(),
        },
        {
          id: 2,
          user_id: 2,
          content: "This is a thread created by John Doe.",
          created_at: knex.fn.now(),
        },
        {
          id: 3,
          user_id: 3,
          content: "Jane Doe created this thread.",
          created_at: knex.fn.now(),
        },
        {
          id: 4,
          user_id: 1,
          content: "Iman created another thread.",
          created_at: knex.fn.now(),
        },
        {
          id: 5,
          user_id: 2,
          content: "John Doe created another thread.",
          created_at: knex.fn.now(),
        },
        {
          id: 6,
          user_id: 3,
          content: "Jane Doe created another thread.",
          created_at: knex.fn.now(),
        },
      ]);
    });
};
