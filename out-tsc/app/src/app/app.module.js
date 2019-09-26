import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './login-layout/layout.module';
import { LayoutsModule } from './form-layout/layouts.module';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        AuthGuard
    ], imports: [[
            BrowserModule,
            MatButtonModule,
            LayoutModule,
            HttpClientModule,
            LayoutsModule,
            AppRoutingModule,
            MatDialogModule,
            BrowserAnimationsModule,
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [BrowserModule,
        MatButtonModule,
        LayoutModule,
        HttpClientModule,
        LayoutsModule,
        AppRoutingModule,
        MatDialogModule,
        BrowserAnimationsModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
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
                    AuthGuard
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null);
//# sourceMappingURL=app.module.js.map