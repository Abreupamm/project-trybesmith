import { Request, Response } from 'express';
import UsersService from '../sevices/UsersService';
import statusCodes from '../utlis/statusCodes';

export default class UserController {
  constructor(private userService = new UsersService()) {}

  public createUser = async (req: Request, res: Response) => {
    const result = await this.userService.createUser(req.body);
    res.status(statusCodes.CREATED).json({ token: result });
  };
}