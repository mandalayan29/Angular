import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  // userForm!: FormGroup;
  userForm= new FormGroup({
    "firstName": new FormControl(""),
    "lastName": new FormControl("")
  })

  constructor(){}

  submitForm(){
    console.log(this.userForm.value);
  }

}
