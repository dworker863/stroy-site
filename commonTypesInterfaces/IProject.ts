import { IReview } from './IReview';

export interface IProject {
  id?: number;
  name: string;
  description: string;
  projectReview?: IReview;
  review: IReview | null;
  images: any[];
  price: number;
}
