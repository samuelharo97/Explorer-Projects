/*
  Warnings:

  - You are about to drop the column `user` on the `rm_movie` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `rm_movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rm_movie" DROP CONSTRAINT "rm_movie_user_fkey";

-- AlterTable
ALTER TABLE "rm_movie" DROP COLUMN "user",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "rm_movie" ADD CONSTRAINT "rm_movie_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "rm_user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
