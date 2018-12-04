exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.integer("users_id").references('users.id').onDelete('cascade');
    table.integer("events_id").references('events.id').onDelete('cascade');
    table.string("comment", [255]);
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("comments");
};

