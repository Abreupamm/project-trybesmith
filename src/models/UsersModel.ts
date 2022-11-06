import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, Login } from '../interfaces/User';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user } as User;
  }
  
  public async getUserByName(user: Login): Promise<User> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [user.username, user.password]
    )
    return result;
  }

  public async login(user: Login): Promise<User> {
    const getUser = await 
  }
}