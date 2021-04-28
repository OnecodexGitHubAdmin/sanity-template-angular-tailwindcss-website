import { SanityType } from './sanity-type';
import { BlockMark } from './block-mark';

export interface Block extends SanityType {
  style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'normal'; 
  children: BlockMark[];
  html: string;
  code: string;
}
