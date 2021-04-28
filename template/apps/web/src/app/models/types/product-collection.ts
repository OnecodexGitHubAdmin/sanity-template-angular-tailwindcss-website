import { Reference } from './reference';
import { SanityType } from './sanity-type';

export interface BlogCollection extends SanityType {
  blogReferences: Reference[];
}
