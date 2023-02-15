/*
  Warnings:

  - You are about to drop the `rocket_movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rocket_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rocket_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rocket_movies" DROP CONSTRAINT "rocket_movies_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "rocket_tags" DROP CONSTRAINT "movies_tags_fk";

-- DropForeignKey
ALTER TABLE "rocket_tags" DROP CONSTRAINT "user_tags_fk";

-- DropTable
DROP TABLE "rocket_movies";

-- DropTable
DROP TABLE "rocket_tags";

-- DropTable
DROP TABLE "rocket_users";

-- CreateTable
CREATE TABLE "rm_user" (
    "id_user" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(6),
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "avatar" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "salt" VARCHAR NOT NULL,

    CONSTRAINT "rm_user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "rm_movie" (
    "id_movie" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rm_movie_pkey" PRIMARY KEY ("id_movie")
);

-- CreateTable
CREATE TABLE "rm_tag" (
    "id_tags" TEXT NOT NULL,
    "movie" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rm_tag_pkey" PRIMARY KEY ("id_tags")
);

-- CreateIndex
CREATE UNIQUE INDEX "rm_user_email_key" ON "rm_user"("email");

-- AddForeignKey
ALTER TABLE "rm_movie" ADD CONSTRAINT "rm_movie_user_fkey" FOREIGN KEY ("user") REFERENCES "rm_user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rm_tag" ADD CONSTRAINT "rm_tag_movie_fkey" FOREIGN KEY ("movie") REFERENCES "rm_movie"("id_movie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rm_tag" ADD CONSTRAINT "rm_tag_user_fkey" FOREIGN KEY ("user") REFERENCES "rm_user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
