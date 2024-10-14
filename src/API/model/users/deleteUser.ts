import { prismaClient } from "../../config/prisma";

export function deleteUser(userId: number) {
  try {
    prismaClient.user.delete({ where: { id: userId } });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
