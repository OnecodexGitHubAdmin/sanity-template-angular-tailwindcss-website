import { Block } from './block';
import { Cta } from './cta';
import { EmbedHtml } from './embed-html';
import { Figure } from './figure';
import { ImageRef } from './image-ref';
import { SanityType } from './sanity-type';
import { Tag } from './tag';

export interface Card extends SanityType {
  title: string;
  subtitle: string;
  image: ImageRef;
  text: (Block | Figure | EmbedHtml)[];
  ctas: Cta[];
  tags: Tag[];
}