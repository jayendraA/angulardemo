import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { IveComponent } from './components/ive/ive.component';


const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'ive', component:IveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
