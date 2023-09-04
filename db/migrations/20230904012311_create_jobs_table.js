exports.up = function (knex) {
  return knex.schema.createTable("jobs", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("type").notNullable();
    table.string("description");
    table.string("image_source").notNullable();
    table.string("link").notNullable();
    table.string("user_id").references("users.user_id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("jobs");
};
