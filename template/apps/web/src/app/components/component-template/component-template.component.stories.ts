import { text, number, boolean } from '@storybook/addon-knobs';
import { ComponentTemplateComponent } from './component-template.component';

export default {
  title: 'ComponentTemplateComponent',
  component: ComponentTemplateComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    item: text('item', ''),
  }
})