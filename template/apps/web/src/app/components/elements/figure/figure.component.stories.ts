import { text, number, boolean } from '@storybook/addon-knobs';
import { FigureComponent } from './figure.component';

export default {
  title: 'FigureComponent',
  component: FigureComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})