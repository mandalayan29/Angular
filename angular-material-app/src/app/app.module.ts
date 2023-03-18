import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './body/body.component';
import { SliderComponent } from './body/slider/slider.component';
import { ButtonComponent } from './body/button/button.component';
import { TabGroupComponent } from './body/tab-group/tab-group.component';
import { StepperComponent } from './body/stepper/stepper.component';
import { FormComponent } from './body/form/form.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from'@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

import { SnackBarComponent } from './body/snack-bar/snack-bar.component';
import { SnackBarDesign1Component } from './body/snack-bar/snack-bar-design1/snack-bar-design1.component';
import { SnackBarDesign2Component } from './body/snack-bar/snack-bar-design2/snack-bar-design2.component';
import { SnackBarDesign3Component } from './body/snack-bar/snack-bar-design3/snack-bar-design3.component';
import { SnackBarDesign4Component } from './body/snack-bar/snack-bar-design4/snack-bar-design4.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    SliderComponent,
    ButtonComponent,
    TabGroupComponent,
    StepperComponent,
    FormComponent,
    SnackBarComponent,
    SnackBarDesign1Component,
    SnackBarDesign2Component,
    SnackBarDesign3Component,
    SnackBarDesign4Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,







    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatSnackBarModule

  ],
  providers: [
    { provide: MatSnackBarRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
