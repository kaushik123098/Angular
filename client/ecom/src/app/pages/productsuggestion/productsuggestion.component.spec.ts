import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsuggestionComponent } from './productsuggestion.component';

describe('ProductsuggestionComponent', () => {
  let component: ProductsuggestionComponent;
  let fixture: ComponentFixture<ProductsuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
