exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
      table.increments();
      table.string('name');
      table.string('message').notNullable();
      table.timestamp('timestamp');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('messages');
  };
  