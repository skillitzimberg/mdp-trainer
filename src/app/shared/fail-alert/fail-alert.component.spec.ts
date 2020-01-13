import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailAlertComponent } from './fail-alert.component';

describe('FailAlertComponent', () => {
  let component: FailAlertComponent;
  let fixture: ComponentFixture<FailAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
