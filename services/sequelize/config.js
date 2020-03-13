// yarn add dotenv
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

module.exports.development = {
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URL
};

// Sequelize support more than one database management system and so we have to specify the mysql dialect

module.exports.production = {
  dialect: "mysql",
  url: process.env.DB_URL
};
