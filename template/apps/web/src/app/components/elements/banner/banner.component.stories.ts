import { text, number, boolean } from '@storybook/addon-knobs';
import { BannerComponent } from './banner.component';

export default {
  title: 'BannerComponent',
  component: BannerComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})