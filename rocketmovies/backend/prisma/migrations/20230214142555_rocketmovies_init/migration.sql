/*
  Warnings:

  - You are about to drop the `aws_usage_pricing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `countries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cities" DROP CONSTRAINT "FK_1229b56aa12cae674b824fccd13";

-- DropForeignKey
ALTER TABLE "states" DROP CONSTRAINT "FK_f3bbd0bc19bb6d8a887add08461";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "FK_03934bca2709003c5f08fd436d2";

-- DropTable
DROP TABLE "aws_usage_pricing";

-- DropTable
DROP TABLE "cities";

-- DropTable
DROP TABLE "countries";

-- DropTable
DROP TABLE "migrations";

-- DropTable
DROP TABLE "states";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "rocket_users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "avatar" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "salt" VARCHAR NOT NULL,

    CONSTRAINT "rocket_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rocket_users_email_key" ON "rocket_users"("email");
