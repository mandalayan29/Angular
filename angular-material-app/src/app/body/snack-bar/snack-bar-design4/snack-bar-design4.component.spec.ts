import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDesign4Component } from './snack-bar-design4.component';

describe('SnackBarDesign4Component', () => {
  let component: SnackBarDesign4Component;
  let fixture: ComponentFixture<SnackBarDesign4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarDesign4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarDesign4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
