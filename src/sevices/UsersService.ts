import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/User';
import connection from '../models/connection';
import UsersModel from '../models/UsersModel';

dotenv.config();

export default class UsersService {
  constructor(readonly model = new UsersModel(connection)) { }
    
  public async createUser(user: User): Promise<string> {
    const newUser = await this.model.create(user);
    const token = this.generateToken(newUser);
    return token;
  }
  
  private generateToken = (user: User) => {
    const { id, username } = user;
    const token = jwt.sign({ id, username }, 'secret');
    return token;
  };
}