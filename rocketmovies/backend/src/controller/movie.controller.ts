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
}
