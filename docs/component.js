module.exports = {
    components: {
      schemas: {
        // id model
        User: {
            type: "object",
            properties: {
                id: {
                  type: "integer", // data type
                  description: "An id of a user", // desc
                  example: "1", // example of an id
                },
                name: {
                    type: "string", // data-type
                    description: "Name of user", // desc
                    example: "John doe", // example of a title
                  },
            },
            required: ["name"]
        },
        // task model
        Task: {
          type: "object", // data type
          properties: {
            id: {
              type: "integer", // data-type
              description: "task Id", // desc
              example: "1", // example of an id
            },
            name: {
              type: "string", // data-type
              description: "Task's name", // desc
              example: "Coding in JavaScript", // example of a title
            },
            completed: {
              type: "boolean", // data type
              description: "The status of the task", // desc
              example: false, // example of a completed value
            },
            user_id: {
                type: "integer", // data type
                description: "The associated user", // desc
                example: 1, // example of a completed value
              },
          },
          required: ["name", "user_id"]
        },
        // task input model

        // error model
      },
    },
  };