import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChildComponent } from './block-child.component';

describe('BlockChildComponent', () => {
  let component: BlockChildComponent;
  let fixture: ComponentFixture<BlockChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
