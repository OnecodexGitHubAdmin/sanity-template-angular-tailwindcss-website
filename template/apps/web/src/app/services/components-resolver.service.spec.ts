import { TestBed } from '@angular/core/testing';

import { ComponentsResolverService } from './components-resolver.service';

describe('ComponentsResolverService', () => {
  let service: ComponentsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
