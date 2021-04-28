import { Injectable } from '@angular/core';
import { NotFoundComponent } from '../components/elements/not-found/not-found.component';
import { ComponentItem } from '../models/component-item';
import { SanityType } from '../models/types/sanity-type';
import { Banner } from '../models/types/banner';
import { BannerComponent } from '../components/elements/banner/banner.component';
import { CustomerFeedbackComponent } from '../components/elements/customer-feedback/customer-feedback.component';
import { BlogCollectionComponent } from '../components/elements/blog-collection/blog-collection.component';
import { FeedbackReference } from '../models/types/feedback-reference';
import { BlogCollection } from '../models/types/product-collection';
import { ProductCollection } from '../models/types/blog-collection';
import { ProductCollectionComponent } from '../components/elements/product-collection/product-collection.component';
import { ContactCardComponent } from '../components/elements/contact-card/contact-card.component';
import { ContactCard } from '../models/types/contact-card';
import { CardComponent } from '../components/elements/card/card.component';
import { Card } from '../models/types/card';

@Injectable({
  providedIn: 'root',
})
export class ComponentsResolverService {
  resolveComponent(item: SanityType): ComponentItem {
    switch (item?._type) {
      case 'banner':
        return new ComponentItem(BannerComponent, item as Banner);
      case 'customerFeedback':
        return new ComponentItem(
          CustomerFeedbackComponent,
          item as FeedbackReference
        );
      case 'blogCollection':
        return new ComponentItem(
          BlogCollectionComponent,
          item as BlogCollection
        );
      case 'productCollection':
        return new ComponentItem(
          ProductCollectionComponent,
          item as ProductCollection
        );
      case 'contactCard':
        return new ComponentItem(
          ContactCardComponent,
          item as ContactCard
        );
      case 'card':
        return new ComponentItem(
          CardComponent,
          item as Card
        );
      default:
        return new ComponentItem(NotFoundComponent, null);
    }
  }
}
