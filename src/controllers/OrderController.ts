import { Request, Response } from 'express';
import { OrderAction } from '../actions/OrderAction';

export class OrderController {
  private action = new OrderAction();

  getAll = async (req: Request, res: Response) => {
    try {
      const data = await this.action.getAllOrders();
      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  getByUser = async (req: Request, res: Response) => {
    try {
      const email = req.params.email as string;
      const data = await this.action.getOrdersByUser(email);
      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const order = req.body;
      const result = await this.action.createOrder(order);
      res
        .status(201)
        .json({ success: true, message: 'Order created', data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      await this.action.deleteOrder(id);
      res.status(200).json({ success: true, message: 'Order deleted' });
    } catch (error: any) {
      res.status(404).json({ success: false, message: error.message });
    }
  };
}
