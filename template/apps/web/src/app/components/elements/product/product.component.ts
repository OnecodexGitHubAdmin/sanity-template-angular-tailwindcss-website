import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DynamicComponent } from '../../../models/dynamic-component';
import { ShoppingCartStore } from '../../../models/store/shopping-cart-store';
import { Product } from '../../../models/types/product';
import { SanityService } from '../../../services/sanity.service';
import { addProduct } from '../../../store/actions/shopping-cart.actions';

@Component({
  selector: 'template-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements DynamicComponent {
  product: Product;

  @Input() set data(product: Product) {
    if (product.image?.asset?._ref) {
      product.image.asset.url = this.service.buildImageUrl(product.image.asset._ref);
    }

    this.product = product;
  }

  constructor(private service: SanityService, private store: Store<ShoppingCartStore>) { }
  
  addToCart(product: Product): void {
    this.store.dispatch(addProduct({ product }));
  }
}
