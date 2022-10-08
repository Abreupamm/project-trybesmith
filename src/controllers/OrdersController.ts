import { Request, Response } from 'express';
import OrdersService from '../sevices/OrdersService';
import statusCodes from '../utlis/statusCodes';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getAllOrders();
    res.status(statusCodes.OK).json(orders);
  };
}