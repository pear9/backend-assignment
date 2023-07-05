const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://exobtibd:F_y7ZnW-hkP1jkZKhOsA_AVNpF8mrnuZ@rajje.db.elephantsql.com/exobtibd')

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  module.exports = { sq: sequelize, testDbConnection };