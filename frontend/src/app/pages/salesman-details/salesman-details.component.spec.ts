import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanDetailsComponent } from './salesman-details.component';

describe('SalesmanDetailsComponent', () => {
  let component: SalesmanDetailsComponent;
  let fixture: ComponentFixture<SalesmanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
