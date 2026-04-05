import { Request, Response } from 'express';
import { ReviewAction } from '../actions/ReviewAction';

export class ReviewController {
  private action = new ReviewAction();

  // GET /review/:productId
  getReviewsByProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId as string;

      const reviews = await this.action.getReviewsByProduct(productId);

      res.status(200).json({
        success: true,
        data: reviews,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to fetch reviews',
      });
    }
  };

  // POST /review
  createReview = async (req: Request, res: Response) => {
    try {
      const review = req.body;

      const result = await this.action.createReview(review);

      res.status(201).json({
        success: true,
        message: 'Review added successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to add review',
      });
    }
  };

  // DELETE /review/:id
  deleteReview = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;

      await this.action.deleteReview(id);

      res.status(200).json({
        success: true,
        message: 'Review deleted successfully',
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || 'Review not found',
      });
    }
  };
}
