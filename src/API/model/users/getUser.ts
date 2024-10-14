import { prismaClient } from "../../config/prisma";

export function getUser(userId: number) {
  try {
    prismaClient.user.findUnique({ where: { id: userId } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
