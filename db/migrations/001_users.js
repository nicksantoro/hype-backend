exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.text("email").notNullable().unique();
    table.text("user_name").notNullable().unique();
    table.text("hash_password").notNullable();
    table.text("location").notNullable();
    table.text("profile_pic").notNullable();
    table.boolean("is_admin").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("users");
};
