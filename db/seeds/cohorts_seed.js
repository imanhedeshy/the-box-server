// ./db/seeds/cohorts_seed.js
exports.seed = function (knex) {
  return knex("cohorts")
    .del()
    .then(() => {
      return knex("cohorts").insert([
        {
          id: 1,
          name: "The Nameless '23",
          campus: "Online",
          discipline: "Software Engineering",
          type: "full-time",
          start_date: "2023-06-21",
        },
        {
          id: 2,
          name: "Cohort B",
          campus: "Vancouver",
          discipline: "UX Design",
          type: "full-time",
          start_date: "2023-10-15",
        },
      ]);
    });
};
