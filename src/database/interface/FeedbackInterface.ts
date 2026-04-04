// review.interface.ts
export interface FeedbackType {
  photo: string;
  name: string;
  message: string;
  experience: 'Excellent' | 'Good' | 'Average' | 'Poor';
  rate: number;
}
