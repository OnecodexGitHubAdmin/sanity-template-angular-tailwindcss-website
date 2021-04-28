import { Product } from '../types/product';

export interface ShoppingCartItems {
  product: Product,
  amount: number;
}