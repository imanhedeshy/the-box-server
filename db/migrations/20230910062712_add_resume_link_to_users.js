exports.up = (knex) => {
  return knex.schema.table("users", (table) => {
    table.string("resume_link");
  });
};

exports.down = (knex) => {
  return knex.schema.table("users", (table) => {
    table.dropColumn("resume_link");
  });
};
