const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "postgres",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "Test@123",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || "postgres"
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Users = require("./user")(sequelize, Sequelize);
db.Tasks = require("./task")(sequelize, Sequelize);


module.exports = db;
