import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './body/body.component';
import { SliderComponent } from './body/slider/slider.component';
import { SnackBarComponent } from './body/snack-bar/snack-bar.component';
import { StepperComponent } from './body/stepper/stepper.component';
import { TabGroupComponent } from './body/tab-group/tab-group.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'stepper', component: StepperComponent},
  { path: 'tab', component: TabGroupComponent},
  { path: 'snackbar', component: SnackBarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
