import { Reference } from './reference';
import { SanityType } from './sanity-type';

export interface Figure extends SanityType {
  asset: Reference;
}
