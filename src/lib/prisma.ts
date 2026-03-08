import { PrismaClient } from "@prisma/client";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const datasourceUrl = `mysql://${DB_USER}:${encodeURIComponent(DB_PASSWORD ?? "")}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ datasourceUrl });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
