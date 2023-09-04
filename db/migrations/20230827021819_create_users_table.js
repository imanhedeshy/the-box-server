exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password_hash").notNullable();
    table.string("background_image");
    table.string("profile_pic");
    table.string("headline");
    table.string("location");
    table.string("industry");
    table.enum("user_type", [
      "Odin",
      "student",
      "educator",
      "partner",
      "admin",
      "developer",
    ]);
    table.text("bio");
    table.string("phone");
    table.string("slack");
    table.string("website");
    table.string("linkedin");
    table.string("github");
    table.string("twitter");
    table.string("facebook");
    table.string("instagram");
    table.string("video_source_1");
    table.string("video_source_2");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
