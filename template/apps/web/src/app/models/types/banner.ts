import { SanityType } from './sanity-type';
import { Block } from './block';
import { Figure } from './figure';
import { EmbedHtml } from './embed-html';
import { ImageRef } from './image-ref';
import { Cta } from './cta';

export interface Banner extends SanityType{
  title: string;
  subtitle: string;
  headingHAlignment: 'start' | 'end' | 'center';
  headingVAlignment: 'start' | 'end' | 'center';
  image: ImageRef;
  ctas: Cta[];
  description: (Block |Figure | EmbedHtml) [];
}
