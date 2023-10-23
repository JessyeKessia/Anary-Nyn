import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieAlertComponent } from './cookie-alert.component';

describe('CookieAlertComponent', () => {
  let component: CookieAlertComponent;
  let fixture: ComponentFixture<CookieAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieAlertComponent]
    });
    fixture = TestBed.createComponent(CookieAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
