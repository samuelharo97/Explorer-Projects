import { Request, Response } from 'express';
import { prisma } from '../database/prismaClient';

export class CreateUser {
  async create(request: Request, response: Response) {
    const { name, email, avatar } = request.body;

    const user = await prisma;

    return response.json();
  }
}
