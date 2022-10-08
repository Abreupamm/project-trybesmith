import { Request, Response } from 'express';
import statusCodes from '../utlis/statusCodes';
import ProductsService from '../sevices/ProductsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}
  
  public getAll = async (req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    res.status(statusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}
