-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ExperienceResponsibility" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "experienceId" TEXT NOT NULL,

    CONSTRAINT "ExperienceResponsibility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT NOT NULL,
    "experienceId" TEXT NOT NULL,

    CONSTRAINT "ExperienceProject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExperienceResponsibility" ADD CONSTRAINT "ExperienceResponsibility_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienceProject" ADD CONSTRAINT "ExperienceProject_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
