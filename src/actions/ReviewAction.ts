import { ReviewRepository } from '../database/repositories/ReviewRepository';

export class ReviewAction {
  private repo = new ReviewRepository();

  async getReviewsByProduct(productId: string) {
    return await this.repo.findByProductId(productId);
  }

  async createReview(review: any) {
    if (!review?.productId || !review?.review) {
      throw new Error('ProductId and review are required');
    }

    return await this.repo.create(review);
  }

  async deleteReview(id: string) {
    const deleted = await this.repo.deleteById(id);

    if (!deleted) {
      throw new Error('Review not found');
    }

    return true;
  }
}
