import { FeedbackModel } from '../models/FeedbackModel';

export class FeedbackRepository {
  async findAll() {
    return await FeedbackModel.find({});
  }

  async create(feedback: any) {
    return await FeedbackModel.insertOne(feedback);
  }
}
