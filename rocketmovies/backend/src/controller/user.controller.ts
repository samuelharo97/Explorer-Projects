import { Request, Response } from 'express';
import { UserService } from '../service/user.service';

export class User {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const userService = new UserService();

      const newUser = await userService.createUser(request.body);

      return response.status(201).json(newUser);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal Server Error', status: 500 });
    }
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    try {
      const userService = new UserService();

      const users = await userService.findAll();

      return response.status(200).json(users);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal Server Error', status: 500 });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const userService = new UserService();

      await userService.destroy(request.params.id);

      return response
        .status(200)
        .json({ message: 'deleted count: 1', success: true });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Internal Server Error', status: 500 });
    }
  }
}
