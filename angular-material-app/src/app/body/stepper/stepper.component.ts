import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.sass'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  },
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true}
  }]
})
export class StepperComponent implements OnInit{

  form1= this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  })


  constructor(
    private fb: FormBuilder
  ){}


  ngOnInit(): void {
    
  }



}
