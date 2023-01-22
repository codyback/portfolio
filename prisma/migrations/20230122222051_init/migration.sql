-- CreateTable
CREATE TABLE "Homepage" (
    "id" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "favoriteTech" TEXT NOT NULL,
    "favoriteTechURL" TEXT NOT NULL,
    "currentlyLearning" TEXT NOT NULL,
    "currentlyLearningURL" TEXT NOT NULL,
    "currentlyReading" TEXT NOT NULL,
    "currentlyReadingURL" TEXT NOT NULL,

    CONSTRAINT "Homepage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "url" TEXT,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isEmployed" BOOLEAN NOT NULL DEFAULT false,
    "homepageId" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "homepageId" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hobby" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "homepageId" TEXT NOT NULL,

    CONSTRAINT "Hobby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnologyCertificate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "homepageId" TEXT NOT NULL,

    CONSTRAINT "TechnologyCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "technologyCertificateId" TEXT NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hobby" ADD CONSTRAINT "Hobby_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnologyCertificate" ADD CONSTRAINT "TechnologyCertificate_homepageId_fkey" FOREIGN KEY ("homepageId") REFERENCES "Homepage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_technologyCertificateId_fkey" FOREIGN KEY ("technologyCertificateId") REFERENCES "TechnologyCertificate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
