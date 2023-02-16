import * as bcrypt from 'bcrypt';
import { prisma } from '../database/prismaClient';
import { UserEntity } from '../types/user.entity';

export class UserService {
  public async createUser(body: UserEntity): Promise<UserEntity> {
    const { name, email, avatar, password } = body;

    const salt = await bcrypt.genSalt(12);

    const hash = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        avatar,
        salt
      }
    });
    delete user.password;
    delete user.salt;

    return user;
  }

  public async findOne(id: string): Promise<any> {
    const user = await prisma.user.findUnique({
      where: { id_user: id },
      select: {
        id_user: true,
        name: true,
        avatar: true,
        email: true,
        movie: {
          select: {
            title: true,
            description: true,
            rating: true,
            id_movie: true,
            tags: true
          }
        }
      }
    });

    if (!user) {
      return null;
    }

    return user;
  }

  public async findAll() {
    const users = prisma.user.findMany();

    return users;
  }

  public async destroy(userId: string): Promise<UserEntity> {
    const user = await prisma.user.delete({ where: { id_user: userId } });

    return user;
  }
}
