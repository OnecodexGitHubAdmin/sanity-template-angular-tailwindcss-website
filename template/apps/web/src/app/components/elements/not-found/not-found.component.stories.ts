import { text, number, boolean } from '@storybook/addon-knobs';
import { NotFoundComponent } from './not-found.component';

export default {
  title: 'NotFoundComponent',
  component: NotFoundComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ),
  }
})