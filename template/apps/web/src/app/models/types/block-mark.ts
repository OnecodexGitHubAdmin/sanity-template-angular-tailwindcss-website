import { SanityType } from './sanity-type';

export interface BlockMark extends SanityType {
  text: string;
  _type: 'span';
}
