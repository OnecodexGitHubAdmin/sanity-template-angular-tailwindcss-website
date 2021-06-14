import { text, number, boolean } from '@storybook/addon-knobs';
import { BadgeComponent } from './badge.component';

export default {
  title: 'BadgeComponent',
  component: BadgeComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    tag: text('tag', ),
  }
})