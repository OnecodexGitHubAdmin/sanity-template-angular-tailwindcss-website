import { text, number, boolean } from '@storybook/addon-knobs';
import { CustomerFeedbackComponent } from './customer-feedback.component';

export default {
  title: 'CustomerFeedbackComponent',
  component: CustomerFeedbackComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    data: text('data', ''),
  }
})