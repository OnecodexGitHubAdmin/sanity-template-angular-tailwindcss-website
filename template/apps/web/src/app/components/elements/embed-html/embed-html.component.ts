import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { EmbedHtml } from '../../../models/types/embed-html';

@Component({
  selector: 'template-embed-html',
  templateUrl: './embed-html.component.html',
  styleUrls: ['./embed-html.component.scss']
})
export class EmbedHtmlComponent implements DynamicComponent {
  @Input() data: EmbedHtml;
  

}
