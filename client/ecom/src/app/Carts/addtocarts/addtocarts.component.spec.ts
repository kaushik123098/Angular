import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartsComponent } from './addtocarts.component';

describe('AddtocartsComponent', () => {
  let component: AddtocartsComponent;
  let fixture: ComponentFixture<AddtocartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
