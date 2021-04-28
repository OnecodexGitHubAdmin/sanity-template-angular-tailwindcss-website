import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableTextComponent } from './portable-text.component';

describe('PortableTextComponent', () => {
  let component: PortableTextComponent;
  let fixture: ComponentFixture<PortableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortableTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
