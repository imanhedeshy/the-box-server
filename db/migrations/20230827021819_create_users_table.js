exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password_hash").notNullable();
    table.enum("user_type", [
      "Odin",
      "student",
      "educator",
      "partner",
      "admin",
      "developer",
    ]);
    table.text("bio");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
