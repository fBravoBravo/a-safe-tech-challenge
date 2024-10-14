import { User } from "@prisma/client";
import { prismaClient } from "../../config/prisma";

export function updateUser(userProperties: User, userId: number) {
  try {
    prismaClient.user.update({ where: { id: userId }, data: userProperties });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
