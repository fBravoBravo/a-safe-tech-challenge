import { SwaggerOptions } from "@fastify/swagger";
import { FastifyRegisterOptions } from "fastify";

export const swaggerOptions = {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "A-safe tech challenge api",
      description: "This is a simple API for the A-safe Tech challenge",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      //TODO add production server
    ],
    tags: [{ name: "Trips", description: "Trip related end-points" }],
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
  },
} as FastifyRegisterOptions<SwaggerOptions>;
