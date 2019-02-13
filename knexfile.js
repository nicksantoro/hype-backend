// Update with your config settings.

// const { PGHOST, PGDATABASE } = require('./env');


// PGUSER, PGPASSWORD

module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: PGHOST,
  //     database: PGDATABASE,
  //     user: PGUSER,
  //     password: PGPASSWORD
  //   },
  //   migrations: { directory: './db/migrations' },
  //   seeds: { directory: './db/seeds' }
  // },

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'hype-dev'
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

};