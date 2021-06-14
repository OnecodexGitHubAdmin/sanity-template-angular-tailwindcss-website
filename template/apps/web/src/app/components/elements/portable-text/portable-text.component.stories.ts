import { text, number, boolean } from '@storybook/addon-knobs';
import { PortableTextComponent } from './portable-text.component';

export default {
  title: 'PortableTextComponent',
  component: PortableTextComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    item: text('item', ),
  }
})