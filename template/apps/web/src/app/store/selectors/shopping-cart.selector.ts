import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ShoppingCart } from '../../models/store/shopping-cart';
import { ShoppingCartItems } from '../../models/store/shopping-cart-items';

export const selectFeature = createFeatureSelector<ShoppingCart>('shoppingCart');

export const getTotalCount = createSelector(
  selectFeature, (state: ShoppingCart) => state.products.reduce((a: number, b: ShoppingCartItems): number => {
    return a + b.amount;
  }, 0)
);
