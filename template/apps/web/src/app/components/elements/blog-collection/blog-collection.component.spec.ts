import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCollectionComponent } from './blog-collection.component';

describe('BlogCollectionComponent', () => {
  let component: BlogCollectionComponent;
  let fixture: ComponentFixture<BlogCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
