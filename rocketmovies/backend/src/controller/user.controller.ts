import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { prisma } from '../database/prismaClient';

export class CreateUser {
  async create(request: Request, response: Response) {
    const { name, email, avatar, password } = request.body;

    const salt = await bcrypt.genSalt(12);

    const hash = await this.hashPassword(password, salt);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hash,
        avatar,
        salt
      }
    });

    return response.json(user);
  }

  private async hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
}
