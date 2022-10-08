import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/Order';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const [list] = await this.connection.execute(`
      SELECT o.*, JSON_ARRAYAGG(p.id) AS productsIds 
      FROM Trybesmith.Orders AS o 
      JOIN Trybesmith.Products AS p ON o.id = p.orderId 
      GROUP BY o.id`);

    return list as Order[];
  }
}
