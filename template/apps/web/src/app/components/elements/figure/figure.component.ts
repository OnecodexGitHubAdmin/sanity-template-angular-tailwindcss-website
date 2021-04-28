import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { Figure } from '../../../models/types/figure';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'template-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements DynamicComponent {
  url: string;

  @Input() set data(figureReference: Figure) {
    this.url = this.service.buildImageUrl(figureReference.asset._ref)
  };

  constructor(private service: SanityService) { 
  }
}
