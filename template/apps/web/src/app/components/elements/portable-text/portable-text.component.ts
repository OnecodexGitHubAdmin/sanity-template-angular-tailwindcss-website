import { Component, Input } from '@angular/core';
import { Block } from '../../../models/types/block';
import { EmbedHtml } from '../../../models/types/embed-html';
import { Figure } from '../../../models/types/figure';

@Component({
  selector: 'template-portable-text',
  templateUrl: './portable-text.component.html',
  styleUrls: ['./portable-text.component.scss']
})
export class PortableTextComponent {
  @Input() item: Block | Figure | EmbedHtml;
}
