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
}
