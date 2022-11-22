const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "conference",
  process.env.DB_USER || "quizophy",
  process.env.DB_PASSWORD || "g6k5fNzwGgwEgE2kYTEd",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "quizophydb.cira15sxubzg.ap-south-1.rds.amazonaws.com",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || "conference"
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Users = require("./user")(sequelize, Sequelize);
db.Tasks = require("./task")(sequelize, Sequelize);


module.exports = db;
