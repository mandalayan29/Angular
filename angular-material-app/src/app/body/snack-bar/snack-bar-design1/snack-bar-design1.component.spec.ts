import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDesign1Component } from './snack-bar-design1.component';

describe('SnackBarDesign1Component', () => {
  let component: SnackBarDesign1Component;
  let fixture: ComponentFixture<SnackBarDesign1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarDesign1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarDesign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
