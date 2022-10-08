import connection from '../models/connection';
import OrdersModel from '../models/OrdersModel';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllOrders() {
    const result = await this.model.getAllOrders();
    return result;
  }
}