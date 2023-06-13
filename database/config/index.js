// Third Party Dependencies.
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Environment Variables.
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT, DB_PORT, DEBUG } =
  process.env;

if (DEBUG === "true") {

  // Database Connection.
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  });

  module.exports = sequelize;

} else {

  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    // ! Connecting with CloudDatabase
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });

  module.exports = sequelize;
}

