import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrWayListComponent } from './dr-way-list.component';

describe('DrWayListComponent', () => {
  let component: DrWayListComponent;
  let fixture: ComponentFixture<DrWayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrWayListComponent]
    });
    fixture = TestBed.createComponent(DrWayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
