module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(
      "users",
      {
        id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          type: Sequelize.DATE
        }
      },
      {
        tableName: "users",
      }
    );
    return Users;
  };
  