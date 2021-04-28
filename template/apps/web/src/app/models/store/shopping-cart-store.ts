import { ShoppingCartItems } from './shopping-cart-items';

export interface ShoppingCartStore {
  shoppingCart: ReadonlyArray<ShoppingCartItems>;
}