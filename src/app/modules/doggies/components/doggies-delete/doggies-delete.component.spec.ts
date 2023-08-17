import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggiesDeleteComponent } from './doggies-delete.component';

describe('DoggiesDeleteComponent', () => {
  let component: DoggiesDeleteComponent;
  let fixture: ComponentFixture<DoggiesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggiesDeleteComponent]
    });
    fixture = TestBed.createComponent(DoggiesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
