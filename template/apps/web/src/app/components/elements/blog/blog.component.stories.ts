import { text, number, boolean } from '@storybook/addon-knobs';
import { BlogComponent } from './blog.component';

export default {
  title: 'BlogComponent',
  component: BlogComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ),
  }
})