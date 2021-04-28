import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { SanityType } from '../../../models/types/sanity-type';

@Component({
  selector: 'template-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements DynamicComponent {
  @Input() data: SanityType;
  
}
