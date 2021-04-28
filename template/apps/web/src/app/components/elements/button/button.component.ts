import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'template-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() route: string;
  @Input() inverse: boolean;
  @Input() title: string;
  @Input() btnClick: EventEmitter<void>;

  clickBtn(): void {
    if (this.btnClick) {
      this.btnClick.emit(null);
    }
  }
}