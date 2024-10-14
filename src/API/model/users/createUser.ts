import { User } from "@prisma/client";
import { prismaClient } from "../../config/prisma";

export function createUser(userProperties: User) {
  try {
    prismaClient.user.create({ data: userProperties });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
