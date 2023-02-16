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

  async findOne(request: Request, response: Response): Promise<Response> {
    try {
      const userService = new UserService();
      const user = await userService.findOne(request.params.id);

      if (!user) {
        return response
          .status(404)
          .json({ message: 'user not found', status: 404 });
      }

      return response.status(200).json(user);
    } catch (error) {}
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
