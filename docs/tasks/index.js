const createTask = require("./create-task");
const deleteTask = require("./delete-task");
const getTasks = require("./get-tasks");
const login = require("./login");
const updateTask = require("./update-task");

module.exports = {
  paths: {
    "/user": {
      ...login,
    },
    "/task": {
      ...getTasks,
      ...createTask,
    },
    "/task/{id}": {
      ...updateTask,
      ...deleteTask,
    },
  },
};
