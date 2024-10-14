import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getUsersController() {
  console.log("getUsersController executed");
}
