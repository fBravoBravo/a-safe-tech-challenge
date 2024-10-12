import * as fastify from "fastify";

export async function routes(fastify: fastify.FastifyInstance) {
  fastify.register(tripRoutes, { prefix: "/trips" });
}
