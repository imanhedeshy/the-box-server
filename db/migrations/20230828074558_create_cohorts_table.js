exports.up = function (knex) {
  return knex.schema.createTable("cohorts", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .enum("campus", [
        "Toronto",
        "Vancouver",
        "New York",
        "Miami",
        "Los Angeles",
        "San Francisco",
        "Chicago",
        "Dallas",
        "Seattle",
        "London",
        "Online",
      ])
      .notNullable();
    table
      .enum("discipline", [
        "Software Engineering",
        "UX Design",
        "Data Science",
        "Cybersecurity",
        "Web Development",
        "Digital Marketing",
      ])
      .notNullable();
    table.enum("type", ["full-time", "part-time"]).notNullable();
    table.date("start_date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cohorts");
};
