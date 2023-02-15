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

-- CreateTable
CREATE TABLE "rocket_movies" (
    "movie_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rocket_movies_pkey" PRIMARY KEY ("movie_id")
);

-- CreateTable
CREATE TABLE "rocket_tags" (
    "tags_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rocket_tags_pkey" PRIMARY KEY ("tags_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rocket_users_email_key" ON "rocket_users"("email");

-- AddForeignKey
ALTER TABLE "rocket_movies" ADD CONSTRAINT "rocket_movies_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "rocket_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rocket_tags" ADD CONSTRAINT "movies_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "rocket_movies"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rocket_tags" ADD CONSTRAINT "user_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "rocket_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
