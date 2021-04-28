import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponent } from '../../../models/dynamic-component';
import { BlogPost } from '../../../models/types/blog-post';
import { BlogCollection } from '../../../models/types/product-collection';
import { Reference } from '../../../models/types/reference';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'template-blog-collection',
  templateUrl: './blog-collection.component.html',
  styleUrls: ['./blog-collection.component.scss'],
})
export class BlogCollectionComponent implements DynamicComponent {
  $postsObservable: Observable<BlogPost[]>;

  @Input() set data(collection: BlogCollection) {
    this.$postsObservable = this.service.fetchBlogPosts(
      collection.blogReferences.map((asset: Reference) => asset._ref)
    );
  }

  constructor(private service: SanityService) {}
}
