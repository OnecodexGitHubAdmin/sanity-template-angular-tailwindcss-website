import { text, number, boolean } from '@storybook/addon-knobs';
import { BlockChildComponent } from './block-child.component';

export default {
  title: 'BlockChildComponent',
  component: BlockChildComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ),
  }
})