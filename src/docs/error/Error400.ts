const Error400 = {
    "type": "object",
    "properties": {
        "message": {
            "type": "string",
            "description": "A message describing the error."
        }
    },
    "example": {
        "message": "Bad request, invalid input."
    }
}

export default Error400;