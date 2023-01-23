-- CreateTable
CREATE TABLE "About" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "goalPost" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "aboutId" TEXT NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutParagraph" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aboutId" TEXT NOT NULL,

    CONSTRAINT "AboutParagraph_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AboutParagraph" ADD CONSTRAINT "AboutParagraph_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
