exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cohorts").insert([
        {
          id: 1,
          name: "Cohort 1",
          campus: "Toronto",
          discipline: "Software Engineering",
          type: "full-time",
          start_date: "2023-01-01",
        },
        {
          id: 2,
          name: "Cohort 2",
          campus: "Vancouver",
          discipline: "Data Science",
          type: "part-time",
          start_date: "2023-02-01",
        },
        {
          id: 3,
          name: "Cohort 3",
          campus: "New York",
          discipline: "UX Design",
          type: "full-time",
          start_date: "2023-03-01",
        },
      ]);
    });
};
