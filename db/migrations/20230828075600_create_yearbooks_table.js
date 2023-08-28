exports.up = function (knex) {
  return knex.schema.createTable("yearbooks", function (table) {
    table.increments("id").primary();
    table
      .integer("cohort_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cohorts")
      .unique();
    table.date("start_date").notNullable();
    table.string("cover_image_url");
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("yearbooks");
};
