import { text, number, boolean } from '@storybook/addon-knobs';
import { ContactCardComponent } from './contact-card.component';

export default {
  title: 'ContactCardComponent',
  component: ContactCardComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ),
  }
})