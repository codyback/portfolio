import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    homepage: prisma.homepage.findFirst({
      include: {
        experiences: true,
        skills: true,
        hobbies: true,
        certifications: true,
      }
    })
  }
}
