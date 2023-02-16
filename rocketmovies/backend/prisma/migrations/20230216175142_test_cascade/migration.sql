-- DropForeignKey
ALTER TABLE "rm_movie" DROP CONSTRAINT "rm_movie_user_fkey";

-- DropForeignKey
ALTER TABLE "rm_tag" DROP CONSTRAINT "rm_tag_movie_fkey";

-- DropForeignKey
ALTER TABLE "rm_tag" DROP CONSTRAINT "rm_tag_user_fkey";

-- AddForeignKey
ALTER TABLE "rm_movie" ADD CONSTRAINT "rm_movie_user_fkey" FOREIGN KEY ("user") REFERENCES "rm_user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rm_tag" ADD CONSTRAINT "rm_tag_movie_fkey" FOREIGN KEY ("movie") REFERENCES "rm_movie"("id_movie") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rm_tag" ADD CONSTRAINT "rm_tag_user_fkey" FOREIGN KEY ("user") REFERENCES "rm_user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
