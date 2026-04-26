import { PrismaClient } from "../domain/generated/prisma/client";

const prisma = new PrismaClient();

export { prisma };