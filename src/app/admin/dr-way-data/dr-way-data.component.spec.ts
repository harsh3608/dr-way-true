import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrWayDataComponent } from './dr-way-data.component';

describe('DrWayDataComponent', () => {
  let component: DrWayDataComponent;
  let fixture: ComponentFixture<DrWayDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrWayDataComponent]
    });
    fixture = TestBed.createComponent(DrWayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
