const Error500 = {
    type: "object",
    properties: {
        message: {
            type: "string",
            description: "A message describing the error.",
        },
    },
    example: {
        message: "Internal server error.",
    },
}

export default Error500;