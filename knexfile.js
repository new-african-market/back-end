// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      //below needs to change
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },


  production: {
    client: 'postgresql', // => May need to edit for Heroku: 'pg'
    connection: {
      database: process.env.DATABASE_URL, // =>DATABASE_URL comes from Heroku. Used to connect to Heroku
      user:     'username', // => may not need
      password: 'password' // => may not need
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  }

};
