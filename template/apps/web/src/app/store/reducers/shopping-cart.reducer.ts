import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/types/product';
import { ShoppingCartItems } from '../../models/store/shopping-cart-items';
import { addProduct, removeProduct } from '../actions/shopping-cart.actions';

export const initialState: ReadonlyArray<ShoppingCartItems> = [];

export const addOrUpdateShoppingCartItem = (state: ReadonlyArray<ShoppingCartItems>, item: Product) => {
  if (state.some((existingItem: ShoppingCartItems) => existingItem.product?._id === item._id)) {
    return [...state.map((existingItem: ShoppingCartItems) => {
      if (existingItem.product._id === item._id) {
        return {
          ...existingItem,
          amount: existingItem.amount + 1
        };
      }

      return { ...existingItem };
    })];
  } else {
    return [...state, { product: item, amount: 1 }];
  }
};

export const removeOrUpdateShoppingCartItem = (state: ReadonlyArray<ShoppingCartItems>, item: Product) => {
  return [...state.map((existingItem: ShoppingCartItems) => {
    if (existingItem.product._id === item._id) {
      if (existingItem.amount <= 1) {
        return null;
      }

      return {
        ...existingItem,
        amount: existingItem.amount - 1
      };
    }

    return { ...existingItem };
  })].filter((item: ShoppingCartItems) => !!item);
};

export const shoppingCartReducer = createReducer(
  initialState,
  on(addProduct, (state, action: { product: Product }) => addOrUpdateShoppingCartItem(state, action.product)),
  on(removeProduct, (state, action: { product: Product }) => removeOrUpdateShoppingCartItem(state, action.product))
);