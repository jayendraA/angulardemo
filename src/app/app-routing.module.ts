import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RenderComponent} from './login-layout/render/render.component';
import { MainlayoutComponent } from './form-layout/mainlayout/mainlayout.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
   {path : '', component : RenderComponent, loadChildren : './auth/auth.module#AuthModule'},
   {path : '', canActivate : [AuthGuard], component : MainlayoutComponent, loadChildren : './dashboard/dashboard.module#DashboardModule'},

  //  {path : '',  component : MainlayoutComponent,loadChildren :()=>import('./dashboard/dashboard.module').then(({DashboardModule})=>DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
