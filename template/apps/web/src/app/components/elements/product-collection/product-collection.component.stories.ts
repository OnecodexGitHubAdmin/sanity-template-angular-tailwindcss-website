import { text, number, boolean } from '@storybook/addon-knobs';
import { ProductCollectionComponent } from './product-collection.component';

export default {
  title: 'ProductCollectionComponent',
  component: ProductCollectionComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})