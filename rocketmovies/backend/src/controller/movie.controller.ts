import { Request, Response } from 'express';
import { MovieService } from '../service/movie.service';

export class Movie {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const movieService = new MovieService();

      const movie = await movieService.create(request.params.id, request.body);

      return response.status(201).json(movie);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal Server Error', status: 500 });
    }
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    try {
      const movieService = new MovieService();

      await movieService.destroy(request.params.id);

      return response
        .status(200)
        .json({ message: 'movie deleted', success: true, deletedCount: 1 });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal Server Error', status: 500 });
    }
  }
}
