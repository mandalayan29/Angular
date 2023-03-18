import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDesign2Component } from './snack-bar-design2.component';

describe('SnackBarDesign2Component', () => {
  let component: SnackBarDesign2Component;
  let fixture: ComponentFixture<SnackBarDesign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarDesign2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarDesign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
