module.exports = {
    // operation's method
    post: {
      description: "Login user", // short desc
      operationId: "loginUser", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User", // task input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "User login successfully", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };