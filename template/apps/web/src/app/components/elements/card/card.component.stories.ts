import { text, number, boolean } from '@storybook/addon-knobs';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})