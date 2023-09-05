exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tech_stack")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tech_stack").insert([
        {
          id: 1,
          user_id: 1,
          tech_stack: "javascript",
          tech_stack_source_link:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          id: 2,
          user_id: 1,
          tech_stack: "react",
          tech_stack_source_link: "https://reactjs.org/",
        },
        {
          id: 3,
          user_id: 2,
          tech_stack: "nodejs",
          tech_stack_source_link: "https://nodejs.org/en/",
        },
        {
          id: 4,
          user_id: 2,
          tech_stack: "expressjs",
          tech_stack_source_link: "https://expressjs.com/",
        },
        {
          id: 5,
          user_id: 3,
          tech_stack: "mysql",
          tech_stack_source_link: "https://www.mysql.com/",
        },
        {
          id: 6,
          user_id: 3,
          tech_stack: "api",
          tech_stack_source_link:
            "https://developer.mozilla.org/en-US/docs/Web/API",
        },
        {
          id: 7,
          user_id: 1,
          tech_stack: "typescript",
          tech_stack_source_link: "https://www.typescriptlang.org/",
        },
        {
          id: 8,
          user_id: 1,
          tech_stack: "html",
          tech_stack_source_link:
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          id: 9,
          user_id: 2,
          tech_stack: "css",
          tech_stack_source_link:
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          id: 10,
          user_id: 2,
          tech_stack: "sass",
          tech_stack_source_link: "https://sass-lang.com/",
        },
        {
          id: 11,
          user_id: 3,
          tech_stack: "scss",
          tech_stack_source_link: "https://sass-lang.com/",
        },
        {
          id: 12,
          user_id: 3,
          tech_stack: "axios",
          tech_stack_source_link: "https://axios-http.com/",
        },
        {
          id: 13,
          user_id: 1,
          tech_stack: "flexbox",
          tech_stack_source_link:
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout",
        },
        {
          id: 14,
          user_id: 1,
          tech_stack: "bem",
          tech_stack_source_link: "http://getbem.com/",
        },
      ]);
    });
};
