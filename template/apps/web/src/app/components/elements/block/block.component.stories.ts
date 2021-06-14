import { text, number, boolean } from '@storybook/addon-knobs';
import { BlockComponent } from './block.component';

export default {
  title: 'BlockComponent',
  component: BlockComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ),
  }
})