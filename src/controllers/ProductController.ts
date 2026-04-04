// product.controller.ts
import { Request, Response, NextFunction } from 'express';
import { ProductAction } from '../actions/ProductAction';

export class ProductController {
  private action = new ProductAction();

  getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.action.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  };

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await this.action.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  };
}
