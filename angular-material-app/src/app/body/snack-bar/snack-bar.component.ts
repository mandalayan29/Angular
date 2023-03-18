import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarDesign1Component } from './snack-bar-design1/snack-bar-design1.component';
import { SnackBarDesign2Component } from './snack-bar-design2/snack-bar-design2.component';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.sass']
})
export class SnackBarComponent implements OnInit{

  constructor(
    private snackBar: MatSnackBar,
    private ref: MatSnackBarRef<SnackBarDesign1Component>
  ){

  }
  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open("Hello", "done",{duration: 2000, panelClass: ['blue-snackbae']});
  }

  openComponentSnackBar(n: number) {
    const config = new MatSnackBarConfig();
    // config.verticalPosition = 'top';
    // config.horizontalPosition = 'right';

    this.snackBar.openFromComponent(SnackBarDesign2Component, {
      // duration : 2000,
      data: {
        type: n,
        title: "Error occured",
        text: "Hello"
      },
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'custom-snackbar',
      // panelClass: ['custom-bar1', 'mat-mdc-snack-bar-container']
    })

    // this.ref._open();

  }

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action);
  // }

}
