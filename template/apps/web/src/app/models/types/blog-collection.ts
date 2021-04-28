import { Reference } from './reference';
import { SanityType } from './sanity-type';

export interface ProductCollection extends SanityType {
  productReferences: Reference[];
}
