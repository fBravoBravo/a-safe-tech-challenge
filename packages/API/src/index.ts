import Fastify from "fastify";
import { routes } from "./routes/routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import "dotenv/config";
import { swaggerOptions } from "./config/swaggerOptions.js";

const server = Fastify({
  logger: true,
});

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

server.register(routes, { prefix: "/api" });

server.listen({ port: Number(process.env.PORT) }, function (err) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
