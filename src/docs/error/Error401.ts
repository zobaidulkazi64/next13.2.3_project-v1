// docs/error/Error401.ts
const Error401 = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "A message describing the error.",
          },
        },
        example: {
          message: "Unauthorized access, token expired.",
        },
      },
    },
  },
};

export default Error401;
