import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggiesPageComponent } from './doggies-page.component';

describe('DoggiesPageComponent', () => {
  let component: DoggiesPageComponent;
  let fixture: ComponentFixture<DoggiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggiesPageComponent]
    });
    fixture = TestBed.createComponent(DoggiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
