import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-design1',
  templateUrl: './snack-bar-design1.component.html',
  styleUrls: ['./snack-bar-design1.component.sass'],
  // providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} },]
})
export class SnackBarDesign1Component implements OnInit{

  constructor(
    // private matSnackBarRef: MatSnackBarRef<SnackBarDesign1Component>,
    // @Inject(MAT_SNACK_BAR_DATA) public data: any
  ){}


  ngOnInit(): void {
    // console.log(this.data);
    
  }

  close(){
    // this.matSnackBarRef.dismiss();
  }



}
