import * as fastify from "fastify";
import { userRoutes } from "./userRoutes";

export async function routes(fastify: fastify.FastifyInstance) {
  fastify.register(userRoutes, { prefix: "/users" });
}
