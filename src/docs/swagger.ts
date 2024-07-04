// docs/swagger.ts
import { createSwaggerSpec } from "next-swagger-doc";
import {User} from "@/docs"
import {Error400,Error401,Error404, Error500} from "@/docs/error"

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api", // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },

      servers: [
        {
          url: "http://localhost:3000/api-docs",
        },
      ],

      tags: [
        {
          name: "Auth",
          description: "User related end-points",
        },
        {
          name: "Post",
          description: "Post related end-points",
        },
      ],

      securityDefinitions: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      paths: {
        "/api/auth": {
          get: {
            tags: ["Auth"],
            summary: "Get user details",
            description: "Retrieves the details of a specific user.",
            responses: {
              200: {
                description: "Success",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
              401: Error401,
              404: Error404,
              500: Error500,
             
             
            }
          },

          post: {
            tags: ["Auth"],
            summary: "Create user",
            description: "Creates a new user.",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Success",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
              400: Error400,
              401: Error401,
              404: Error404,
              500: Error500,
            }
          },
        },
      },

      components: {
        schemas: {
          User,
          Error,
          // Define other schemas here as needed
        },
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      
      },
      security: [],
    },
  });
  return spec;
};
