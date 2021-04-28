import { Type } from '@angular/core';
import { DynamicComponent } from './dynamic-component';
import { SanityType } from './types/sanity-type';

export class ComponentItem {
  constructor(public component: Type<DynamicComponent>, public data: SanityType) { }
}