import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedHtmlComponent } from './embed-html.component';

describe('EmbedHtmlComponent', () => {
  let component: EmbedHtmlComponent;
  let fixture: ComponentFixture<EmbedHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
