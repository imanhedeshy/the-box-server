exports.up = function(knex) {
    return knex.schema.alterTable("cohorts", function(table) {
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable("cohorts", function(table) {
      table.dropColumn("user_id");
    });
  };
  