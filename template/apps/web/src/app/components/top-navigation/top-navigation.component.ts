import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShoppingCartItems } from '../../models/store/shopping-cart-items';
import { ShoppingCartStore } from '../../models/store/shopping-cart-store';
import { Route } from '../../models/types/route';

@Component({
  selector: 'template-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  @Input() items: Route[];
  @Input() addShoppingCardIcon: boolean;

  showCart: boolean;
  showMenu: boolean;
  shoppingCartObservable$: Observable<ShoppingCartItems[]>;
  amount: number;

  constructor(private store: Store<ShoppingCartStore>) {
    this.shoppingCartObservable$ = this.store.select((shoppingCartStore: ShoppingCartStore) => shoppingCartStore.shoppingCart).pipe(
      tap((items: ShoppingCartItems[]) => {
        this.amount = items.reduce((prev: number, item: ShoppingCartItems) => prev + item.amount, 0)
      })
    );
  }
}
