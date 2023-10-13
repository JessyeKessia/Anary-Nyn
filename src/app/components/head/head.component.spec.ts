import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadComponent } from './head.component';

function redirectToHome(): void {
  window.open("", "_blank");
}

describe('HeadComponent', () => {
  let component: HeadComponent;
  let fixture: ComponentFixture<HeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadComponent]
    });
    fixture = TestBed.createComponent(HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
