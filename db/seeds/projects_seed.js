exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          title: "Project 1",
          type: "Web Development",
          description: "Description of Project 1",
          image_source: "https://via.placeholder.com/150",
          link: "https://github.com/imanhedeshy/project1",
          user_id: 1,
        },
        {
          id: 2,
          title: "Project 2",
          type: "Mobile App Development",
          description: "Description of Project 2",
          image_source: "https://via.placeholder.com/150",
          link: "https://github.com/johndoe/project2",
          user_id: 2,
        },
        {
          id: 3,
          title: "Project 10",
          type: "Data Science",
          description: "Description of Project 10",
          image_source: "https://via.placeholder.com/150",
          link: "https://github.com/janedoe/project10",
          user_id: 3,
        },
      ]);
    });
};
