import { Block } from './block';
import { EmbedHtml } from './embed-html';
import { Figure } from './figure';
import { Page } from './page';
import { Slug } from './slug';
import { Tag } from './tag';

export interface BlogPost extends Page {
  _updatedAt: Date;
  content: (Block | Figure | EmbedHtml)[];
  introduction: string;
  tags: Tag[];
  route: Slug;
}
