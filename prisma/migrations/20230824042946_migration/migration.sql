-- CreateEnum
CREATE TYPE "SupportedTitle" AS ENUM ('Mr', 'Mrs', 'Miss', 'Dr', 'Prof');

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "identificationNumber" INTEGER NOT NULL,
    "title" "SupportedTitle" NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "teacherNumber" INTEGER NOT NULL,
    "salary" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "identificationNumber" INTEGER NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "studentNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_identificationNumber_key" ON "Teacher"("identificationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_identificationNumber_key" ON "Student"("identificationNumber");
