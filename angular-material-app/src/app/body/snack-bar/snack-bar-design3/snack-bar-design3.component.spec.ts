import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDesign3Component } from './snack-bar-design3.component';

describe('SnackBarDesign3Component', () => {
  let component: SnackBarDesign3Component;
  let fixture: ComponentFixture<SnackBarDesign3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarDesign3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarDesign3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
