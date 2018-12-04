exports.up = function (knex, Promise) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.integer("events_id").references('events.id').onDelete('cascade');
    table.text("photo");
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("photos");
};
