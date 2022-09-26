import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTopBtnComponent } from './go-top-btn.component';

describe('GoTopBtnComponent', () => {
  let component: GoTopBtnComponent;
  let fixture: ComponentFixture<GoTopBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoTopBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoTopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
