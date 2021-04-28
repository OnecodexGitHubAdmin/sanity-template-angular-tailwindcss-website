import { Component, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { ComponentHostDirective } from '../../directives/component-host.directive';
import { DynamicComponent } from '../../models/dynamic-component';
import { ComponentItem } from '../../models/component-item';

@Component({
  selector: 'template-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss']
})
export class ComponentTemplateComponent {

  @Input() set item(itm: ComponentItem) {
    if (itm) {
      this.loadComponents(itm);
    }
  };

  @ViewChild(ComponentHostDirective, {static: true}) componentHost: ComponentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponents(item: ComponentItem): void {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
    componentRef.instance.data = item.data;
  }
}
