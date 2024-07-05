// docs/swagger.ts
import { createSwaggerSpec } from "next-swagger-doc";
import {User,Login, Signup} from "@/docs/user"
import {Error400,Error401,Error404, Error500} from "@/docs/error"
import {Blog, Blogs} from "@/docs/blog"
import {Contact, Contacts} from "@/docs/contact"
import {About, AboutMe} from '@/docs/about'

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api", // define api folder under app folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "zobkazi.github.io API Documentation",
        version: "0.0.1.0",
      },

      servers: [
        {
          url: "https://zobkazi.github.io/api-docs",
          description: "Production Server",
        },
        {
          url: "http://localhost:3000/api-docs",
          description: "Local Server",
        },
      ],

      tags: [
        {
          name: "Auth",
          description: "User related end-points",
        }
      ],

      securityDefinitions: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      paths: {
        ...User,
        ...Blog,

        ...Contact,

        ...About,
      },

      components: {
        schemas: {
          ...Signup,
          ...Login,
          //
          ...Blogs,

          ...Contacts,

          ...AboutMe,

          
          ...Error400,
          ...Error401,
          ...Error404,
          ...Error500,
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
