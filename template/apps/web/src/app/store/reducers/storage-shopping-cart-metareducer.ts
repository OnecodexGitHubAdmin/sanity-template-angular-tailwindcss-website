import {ActionReducer, INIT} from '@ngrx/store';
import { ShoppingCart } from '../../models/store/shopping-cart';

const stateKey = 'shoppingcart';

export const storageShoppingCartMetaReducer = (reducer: ActionReducer<ShoppingCart>): ActionReducer<ShoppingCart> => {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem(stateKey);
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem(stateKey);
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem(stateKey, JSON.stringify(nextState));
    return nextState;
  };
};