exports.up = function (knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.integer("users_id").references('users.id').onDelete('cascade').notNullable();
    table.text("title").notNullable();
    table.text("category").notNullable();
    table.text("description").notNullable();
    table.dateTime("date_time").notNullable();
    table.text("location").notNullable();
    table.text("image")
    table.integer("likes").defaultTo(0)
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("events");
};
