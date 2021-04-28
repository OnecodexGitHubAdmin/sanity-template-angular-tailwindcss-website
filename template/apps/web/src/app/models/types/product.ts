import { Block } from './block';
import { EmbedHtml } from './embed-html';
import { Figure } from './figure';
import { LoadedImage } from './loaded-image';
import { Page } from './page';
import { Slug } from './slug';

export interface Product extends Page {
  _id: string;
  productDescription: (Block | Figure | EmbedHtml)[];
  image: LoadedImage;
  route: Slug;
}
