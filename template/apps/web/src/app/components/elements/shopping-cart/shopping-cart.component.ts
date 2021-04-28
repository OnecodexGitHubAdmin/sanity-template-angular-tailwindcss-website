import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCart } from '../../../models/store/shopping-cart';
import { ShoppingCartStore } from '../../../models/store/shopping-cart-store';
import { Product } from '../../../models/types/product';
import { addProduct, removeProduct } from '../../../store/actions/shopping-cart.actions';

@Component({
  selector: 'template-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  @Input() cart: ShoppingCart;
  @Input() show: boolean;

  constructor(private store: Store<ShoppingCartStore>) {
  }

  increase(product: Product): void {
    this.store.dispatch(addProduct({ product }));
  }
  
  decrease(product: Product): void {
    this.store.dispatch(removeProduct({ product }));
  }
}
