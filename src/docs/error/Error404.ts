const Error404 = {
    type: "object",
    properties: {
        message: {
            type: "string",
            description: "A message describing the error.",
        },
    },
    example: {
        message: "Page not found.",
    },
}


export default Error404;