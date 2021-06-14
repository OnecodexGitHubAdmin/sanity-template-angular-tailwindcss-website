import { text, number, boolean } from '@storybook/addon-knobs';
import { EmbedHtmlComponent } from './embed-html.component';

export default {
  title: 'EmbedHtmlComponent',
  component: EmbedHtmlComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ),
  }
})