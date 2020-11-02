import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';

//Import all components in here

//Add path to all other componenets in here
const routes: Routes = [
  {path:'',component:RegistrationComponent,pathMatch:'full'},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
