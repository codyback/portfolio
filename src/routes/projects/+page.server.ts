import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    projects: prisma.project.findMany({
      select: {
        slug: true,
        title: true,
        description: true,
        imageURL: true,
      },
    }),
  };
}
