import { FeedbackRepository } from '../database/repositories/FeedbackRepository';

export class FeedbackAction {
  private repo = new FeedbackRepository();

  async getAllFeedback() {
    return await this.repo.findAll();
  }

  async createFeedback(feedback: any) {
    if (!feedback?.message) {
      throw new Error('Feedback message is required');
    }

    return await this.repo.create(feedback);
  }
}
