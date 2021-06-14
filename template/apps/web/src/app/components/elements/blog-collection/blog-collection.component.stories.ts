import { text, number, boolean } from '@storybook/addon-knobs';
import { BlogCollectionComponent } from './blog-collection.component';

export default {
  title: 'BlogCollectionComponent',
  component: BlogCollectionComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})