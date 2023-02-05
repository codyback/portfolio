import { PrismaClient } from '@prisma/client';

type PageParams = {
	params: {
		slug: string;
	};
};

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: PageParams) {
	return {
		projects: prisma.project.findFirstOrThrow({
			where: {
				slug: params.slug,
			},
		}),
	};
}
