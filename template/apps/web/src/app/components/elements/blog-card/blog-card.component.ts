import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../models/types/blog-post';

@Component({
  selector: 'template-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() post: BlogPost;

}
