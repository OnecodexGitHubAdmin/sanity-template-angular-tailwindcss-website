import { text, number, boolean } from '@storybook/addon-knobs';
import { BlogCardComponent } from './blog-card.component';

export default {
  title: 'BlogCardComponent',
  component: BlogCardComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    post: text('post', ),
  }
})