import { LoadedImage } from './loaded-image';
import { SanityType } from './sanity-type';

export interface Tag extends SanityType {
  title: string;
  href: string;
  image: LoadedImage;
}
