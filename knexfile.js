// Update with your config settings.

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = require('./env');


module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: PGHOST,
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};