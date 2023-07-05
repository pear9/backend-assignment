require('dotenv').config();
const { Sequelize } = require("sequelize");
const database=process.env.postgres;
console.log(database)
const sequelize = new Sequelize(database);

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  module.exports = { sq: sequelize, testDbConnection };