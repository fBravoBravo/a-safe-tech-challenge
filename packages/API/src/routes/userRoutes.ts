import * as fastify from "fastify";
import { getUsersController } from "../controllers/getUserController";

export async function userRoutes(fastify: fastify.FastifyInstance) {
  fastify.get("/get", getUsersController);
}
