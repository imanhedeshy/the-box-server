exports.up = function (knex) {
  return knex.schema.createTable("likes", function (table) {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    table.integer("thread_id").unsigned().references("id").inTable("threads");
    table.integer("comment_id").unsigned().references("id").inTable("comments");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("likes");
};
