import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { StepperComponent } from './landing-page/stepper/stepper.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'stepper', component: StepperComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
