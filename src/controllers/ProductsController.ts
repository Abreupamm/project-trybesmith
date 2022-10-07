import { Request, Response } from 'express';
import statusCodes from '../utlis/statusCodes';
import ProductsService from '../sevices/productsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}
  
  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}
