import { Slug } from './slug';

export interface Route {
  _id: string;
  slug: Slug;
  title: string,
  order: number
}
