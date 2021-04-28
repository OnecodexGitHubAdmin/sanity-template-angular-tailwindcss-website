import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'template-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() route: string;
  @Input() inverse: boolean;
  @Input() title: string;
  @Output() btnClick = new EventEmitter<void>();

  clickBtn(): void {
    this.btnClick.emit();
  }
}
