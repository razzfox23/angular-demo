import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggiesCreateComponent } from './doggies-create.component';

describe('DoggiesCreateComponent', () => {
  let component: DoggiesCreateComponent;
  let fixture: ComponentFixture<DoggiesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggiesCreateComponent]
    });
    fixture = TestBed.createComponent(DoggiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
