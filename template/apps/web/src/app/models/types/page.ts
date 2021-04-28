import { LoadedImage } from './loaded-image';
import { SanityType } from './sanity-type';

export interface Page {
  _type: 'page';
  title: string;
  description: string;
  backgroundImage: LoadedImage;
  openGraphImage: LoadedImage;
  content: SanityType[];
}
