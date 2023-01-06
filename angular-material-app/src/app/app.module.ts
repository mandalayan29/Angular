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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    SliderComponent,
    ButtonComponent,
    TabGroupComponent,
    StepperComponent,
    FormComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
