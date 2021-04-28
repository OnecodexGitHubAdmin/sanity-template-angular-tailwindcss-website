import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../models/dynamic-component';
import { Block } from '../../../models/types/block';

@Component({
  selector: 'template-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements DynamicComponent {
  @Input() data: Block;
}
