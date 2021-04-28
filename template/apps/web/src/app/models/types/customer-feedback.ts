import { LoadedImage } from './loaded-image';

export interface CustomerFeedback {
  customer: string;
  text: string;
  _createdAt: Date;
  image: LoadedImage;
}
