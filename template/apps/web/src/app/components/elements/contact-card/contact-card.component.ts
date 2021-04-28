import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DynamicComponent } from '../../../models/dynamic-component';
import { ContactCard } from '../../../models/types/contact-card';

@Component({
  selector: 'template-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements DynamicComponent {
  @Input() data: ContactCard;

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
