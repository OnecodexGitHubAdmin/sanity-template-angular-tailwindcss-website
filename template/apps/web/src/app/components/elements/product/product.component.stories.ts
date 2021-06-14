import { text, number, boolean } from '@storybook/addon-knobs';
import { ProductComponent } from './product.component';

export default {
  title: 'ProductComponent',
  component: ProductComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})