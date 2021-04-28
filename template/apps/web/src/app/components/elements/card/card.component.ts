import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { Card } from '../../../models/types/card';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'template-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements DynamicComponent {
  imageUrl: string;
  card: Card;

  @Input() set data(card: Card) {
    if (card.image) {
      this.imageUrl = this.sanityService.buildImageUrl(card.image.asset?._ref);
    }
    
    this.card = card;
  }

  constructor(private sanityService: SanityService){}
}
