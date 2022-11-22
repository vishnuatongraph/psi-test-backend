module.exports = {
    // operation's method.
    delete: {
      description: "Deleting a task", // short desc
      operationId: "deleteTask", // unique operation id
      parameters: [
        // expected parameters
        {
          name: "id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/Task/id", // id model
          },
          required: true, // mandatory
          description: "Deleting a done task", // param desc
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "task deleted successfully", // response desc
        },
        // response code
        404: {
          description: "task not found", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };