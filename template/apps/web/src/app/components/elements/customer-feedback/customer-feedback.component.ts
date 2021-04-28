import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DynamicComponent } from '../../../models/dynamic-component';
import { CustomerFeedback } from '../../../models/types/customer-feedback';
import { FeedbackReference } from '../../../models/types/feedback-reference';
import { Reference } from '../../../models/types/reference';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'template-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss']
})
export class CustomerFeedbackComponent implements DynamicComponent {
  currentIndex = 0;
  $feedbackObservable: Observable<CustomerFeedback[]>;
  itemCount: number;
  
  @Input() set data(feedbackReference: FeedbackReference) {
    this.$feedbackObservable = this.service.fetchFeedback(feedbackReference.feedback.map((ref: Reference) => ref._ref))
      .pipe(tap((items: CustomerFeedback[]) => {
        this.itemCount = items.length;
      }));
  };

  constructor(private service: SanityService) { 
    this.initTimeout();
  }

  private initTimeout(): void {
    setTimeout(() => {
      if (this.currentIndex + 1 >= this.itemCount) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.initTimeout();
    }, 8000);
  }
}
