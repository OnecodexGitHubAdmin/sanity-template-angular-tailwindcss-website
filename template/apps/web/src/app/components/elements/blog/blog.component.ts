import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { BlogPost } from '../../../models/types/blog-post';

@Component({
  selector: 'template-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements DynamicComponent {
  @Input() data: BlogPost;
}
