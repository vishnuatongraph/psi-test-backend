module.exports = {
    // operation's method
    post: {
      description: "Create task", // short desc
      operationId: "createTask", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Task", // task input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Task created successfully", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };