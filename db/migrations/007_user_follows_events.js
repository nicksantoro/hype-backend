exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_follows_events', (table) => {
    table.increments();
    table.integer("users_id").references('users.id').onDelete('cascade');
    table.integer("events_id").references('events.id').onDelete('cascade');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("user_follows_events");
};
