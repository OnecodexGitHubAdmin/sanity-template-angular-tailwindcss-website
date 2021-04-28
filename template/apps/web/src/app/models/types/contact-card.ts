import { Block } from './block';
import { Cta } from './cta';
import { EmbedHtml } from './embed-html';
import { Figure } from './figure';
import { SanityType } from './sanity-type';

export interface ContactCard extends SanityType {
  title: string;
  ctas: Cta[];
  map: string;
  text: (Block | Figure | EmbedHtml)[];
}