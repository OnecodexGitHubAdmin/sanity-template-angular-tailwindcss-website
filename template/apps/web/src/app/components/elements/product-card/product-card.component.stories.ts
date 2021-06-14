import { text, number, boolean } from '@storybook/addon-knobs';
import { ProductCardComponent } from './product-card.component';

export default {
  title: 'ProductCardComponent',
  component: ProductCardComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    product: text('product', ),
  }
})