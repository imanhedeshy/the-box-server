exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("yearbooks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("yearbooks").insert([
        {
          id: 1,
          cohort_id: 1,
          start_date: "2023-01-01",
          cover_image_url: "https://via.placeholder.com/150",
          description:
            "This is the yearbook for cohort 1. It includes all the events, achievements, and memories of this cohort from the start of the year 2023.",
        },
        {
          id: 2,
          cohort_id: 2,
          start_date: "2023-07-01",
          cover_image_url: "https://via.placeholder.com/150",
          description:
            "This is the yearbook for cohort 2. It includes all the events, achievements, and memories of this cohort from the start of July 2023.",
        },
        {
          id: 3,
          cohort_id: 3,
          start_date: "2023-09-01",
          cover_image_url: "https://via.placeholder.com/150",
          description:
            "This is the yearbook for cohort 3. It includes all the events, achievements, and memories of this cohort from the start of September 2023.",
        },
      ]);
    });
};
