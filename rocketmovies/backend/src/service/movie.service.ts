import { prisma } from '../database/prismaClient';
import { MovieEntity } from '../types/movie.entity';

export class MovieService {
  async create(userId: string, body: MovieEntity) {
    const { title, description, rating, tags } = body;

    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        rating,
        user: userId,
        tags: {
          create: tags.map(tagName => ({ name: tagName, user: userId }))
        }
      },
      include: { tags: true, user_id: true }
    });

    return movie;
  }

  async findAll(userId: string) {
    const movies = await prisma.movie.findMany({
      where: {
        user_id: { id_user: userId }
      },
      select: {
        user: true,
        user_id: true,
        title: true,
        description: true,
        rating: true,
        id_movie: true,
        tags: true
      }
    });

    return movies;
  }

  async destroy(movieId: string) {
    try {
      await prisma.movie.delete({ where: { id_movie: movieId } });

      return;
    } catch (error) {
      throw error;
    }
  }
}
