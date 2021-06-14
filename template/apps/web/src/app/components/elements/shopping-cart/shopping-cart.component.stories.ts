import { text, number, boolean } from '@storybook/addon-knobs';
import { ShoppingCartComponent } from './shopping-cart.component';

export default {
  title: 'ShoppingCartComponent',
  component: ShoppingCartComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    cart: text('cart', ),
    show: boolean('show', false),
  }
})