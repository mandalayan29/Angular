import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-design2',
  templateUrl: './snack-bar-design2.component.html',
  styleUrls: ['./snack-bar-design2.component.sass']
})
export class SnackBarDesign2Component implements OnInit{

  // 0: Error,
  // 1: Warning,
  // 2: Success,
  // 3: Warning
  types: boolean[]= [false, false, false, false];
  colors: string[]= ['#F42020', '#E27C04', '#0EC120', '#358ed2'];

  constructor(
    private matSnackBarRef: MatSnackBarRef<SnackBarDesign2Component>,
    @Inject(MAT_SNACK_BAR_DATA) public data: snackBarData,
  ){}

  ngOnInit(): void {
    console.log(this.data.type);
    
    this.types[this.data.type]= true;
    document.documentElement.style.setProperty('--pc', this.colors[this.data.type]);
  }

  close(){
    this.matSnackBarRef.dismiss();
  }

}

interface snackBarData{
    type: number,
    title: string,
    text: string
}
