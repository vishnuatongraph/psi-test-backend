module.exports = {
    // method of operation
    get: {
      description: "Get all tasks", // operation's desc.
      operationId: "getTasks", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Tasks were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task", // task model
              },
            },
          },
        },
      },
    },
  };