// ./db/seeds/threads_seed.js
exports.seed = function (knex) {
    return knex('threads')
      .del()
      .then(() => {
        return knex('threads').insert([
          {
            id: 1,
            user_id: 1,
            content: 'This is the first thread.',
          },
          {
            id: 2,
            user_id: 2,
            content: 'Just sharing some thoughts here.',
          },
          {
            id: 3,
            user_id: 3,
            content: 'Check out this article!',
          },
          {
            id: 4,
            user_id: 1,
            content: 'Discussing a new movie release.',
          },
          {
            id: 5,
            user_id: 2,
            content: 'Tech trends in 2023.',
          },
        ]);
      });
  };
  