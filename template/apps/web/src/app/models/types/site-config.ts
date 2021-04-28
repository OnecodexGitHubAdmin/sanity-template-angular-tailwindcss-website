import { Route } from './route';
import { LoadedImage } from './loaded-image';
import { Tag } from './tag';
import { Block } from './block';

export interface SiteConfig {
  _type: 'site-config';
  mainNavigation: Route[];
  footerNavigation: Route[];
  footerText: Block[];
  title: string;
  logo: LoadedImage;
  favicon: LoadedImage;
  url: string;
  socialMediaLinks: Tag[];
  copyrightDate: Date;
  copyrightText: string;
  primaryColor: string;
  accentColor: string;
  addShoppingCardIcon: boolean;
}
