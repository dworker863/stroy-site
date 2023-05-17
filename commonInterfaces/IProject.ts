import { IReview } from './IReview';

export interface IProject {
  id?: number;
  name: string;
  description: string;
  projectReview: IReview;
  images: any[];
  price: number;
}
