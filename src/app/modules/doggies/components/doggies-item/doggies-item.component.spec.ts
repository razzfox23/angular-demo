import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggiesItemComponent } from './doggies-item.component';

describe('DoggiesItemComponent', () => {
  let component: DoggiesItemComponent;
  let fixture: ComponentFixture<DoggiesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggiesItemComponent]
    });
    fixture = TestBed.createComponent(DoggiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
