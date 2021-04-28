import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponent } from '../../../models/dynamic-component';
import { ProductCollection } from '../../../models/types/blog-collection';
import { Product } from '../../../models/types/product';
import { Reference } from '../../../models/types/reference';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'template-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.scss'],
})
export class ProductCollectionComponent implements DynamicComponent {
  $productsObservable: Observable<Product[]>;

  @Input() set data(collection: ProductCollection) {
    this.$productsObservable = this.service.fetchProductsPosts(
      collection.productReferences.map((asset: Reference) => asset._ref)
    );
  }

  constructor(private service: SanityService) {}
}
