import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './body/body.component';
import { SliderComponent } from './body/slider/slider.component';
import { StepperComponent } from './body/stepper/stepper.component';

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
