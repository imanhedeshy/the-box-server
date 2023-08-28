// ./db/seeds/yearbooks_seed.js
exports.seed = function (knex) {
  return knex("yearbooks")
    .del()
    .then(() => {
      return knex("yearbooks").insert([
        {
          id: 1,
          cohort_id: 1,
          start_date: "2023-06-21",
          cover_image_url: "https://example.com/cover1.jpg",
          description: "The yearbook for The Nameless '23.",
        },
        {
          id: 2,
          cohort_id: 2,
          start_date: "2023-10-15",
          cover_image_url: "https://example.com/cover2.jpg",
          description: "The yearbook for Cohort B of 2023.",
        },
      ]);
    });
};
