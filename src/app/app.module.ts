import { BrowserModule } from '@angular/platform-browser';
import { NgModule,InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './login-layout/layout.module';
import {LayoutsModule} from './form-layout/layouts.module';
import {AuthGuard} from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
export const APP_NAME:InjectionToken<string>=new InjectionToken<string>('App Name');

@NgModule({
  declarations: [
    AppComponent,
    // GrdFilterPipe,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
   LayoutModule,
   HttpClientModule,
   LayoutsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    {provide:APP_NAME,useValue:'Ivy'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
