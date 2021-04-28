import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[templateComponentHost]'
})
export class ComponentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}