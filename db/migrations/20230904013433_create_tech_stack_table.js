exports.up = function (knex) {
  return knex.schema.createTable("tech_stack", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().references("users.id");
    table.enum("tech_stack", [
      "javascript",
      "typescript",
      "html",
      "css",
      "sass",
      "scss",
      "react",
      "nodejs",
      "expressjs",
      "mysql",
      "api",
      "axios",
      "flexbox",
      "bem",
      "spa",
      "lodash",
      "databases",
      "json",
      "git",
      "github",
      "bash",
      "terminal",
      "jsx",
      "figma",
      "vscode",
      "browser_dev_tools",
      "react_dev_tools",
      "openai",
      "github_copilot",
      "postman",
      "npm",
      "passportjs",
      "heroku",
      "github_pages",
      "jira",
      "jest",
      "socketio",
      "jwt",
      "notion",
      "confluence",
      "kanban",
      "scrum",
      "knex",
      "trello",
      "documentation",
      "aws",
      "fibbonacci_sequence"
    ]).notNullable();
    table.string("tech_stack_source_link").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tech_stack");
};
