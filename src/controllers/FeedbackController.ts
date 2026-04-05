import { Request, Response } from 'express';
import { FeedbackAction } from '../actions/FeedbackAction';

export class FeedbackController {
  private action = new FeedbackAction();

  // GET /feedback
  getAllFeedback = async (req: Request, res: Response) => {
    try {
      const data = await this.action.getAllFeedback();

      res.status(200).json({
        success: true,
        data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to fetch feedback',
      });
    }
  };

  // POST /feedback
  createFeedback = async (req: Request, res: Response) => {
    try {
      const feedback = req.body;

      const result = await this.action.createFeedback(feedback);

      res.status(201).json({
        success: true,
        message: 'Feedback submitted successfully',
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to submit feedback',
      });
    }
  };
}
