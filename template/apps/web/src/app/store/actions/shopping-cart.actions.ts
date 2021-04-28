import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/types/product';
 
export const addProduct = createAction(
  '[Shopping Cart] Add Product',
  props<{ product: Product }>()
);
 
export const removeProduct = createAction(
  '[Shopping Cart] Remove Product',
  props<{ product: Product }>()
);