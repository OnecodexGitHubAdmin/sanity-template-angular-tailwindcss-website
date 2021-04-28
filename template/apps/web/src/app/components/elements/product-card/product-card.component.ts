import { Component, Input } from '@angular/core';
import { Product } from '../../../models/types/product';

@Component({
  selector: 'template-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;
}
