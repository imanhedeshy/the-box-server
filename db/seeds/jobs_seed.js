exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("jobs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("jobs").insert([
        {
          id: 1,
          title: "Software Engineer",
          type: "Full-Time",
          description:
            "Responsible for developing and maintaining software applications.",
          image_source: "https://via.placeholder.com/150",
          link: "https://www.example.com/job1",
          user_id: 1,
        },
        {
          id: 2,
          title: "Web Developer",
          type: "Part-Time",
          description: "Responsible for designing and developing websites.",
          image_source: "https://via.placeholder.com/150",
          link: "https://www.example.com/job2",
          user_id: 2,
        },
        {
          id: 3,
          title: "Project Manager",
          type: "Contract",
          description:
            "Responsible for planning, executing, and closing projects.",
          image_source: "https://via.placeholder.com/150",
          link: "https://www.example.com/job3",
          user_id: 3,
        },
      ]);
    });
};
