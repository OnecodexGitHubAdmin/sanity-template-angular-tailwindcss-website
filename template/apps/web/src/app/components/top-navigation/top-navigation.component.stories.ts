import { text, number, boolean } from '@storybook/addon-knobs';
import { TopNavigationComponent } from './top-navigation.component';

export default {
  title: 'TopNavigationComponent',
  component: TopNavigationComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    items: text('items', ),
    addShoppingCardIcon: boolean('addShoppingCardIcon', false),
  }
})