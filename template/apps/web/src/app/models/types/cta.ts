import { Reference } from './reference';
import { SanityType } from './sanity-type';

export interface Cta extends SanityType{
  title: string;
  link: string;
  route: Reference;
}
