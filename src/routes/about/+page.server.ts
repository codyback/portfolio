import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    about: prisma.about.findFirst({
      include: {
        goals: true,
        paragraphs: true,
      }
    })
  }
}
