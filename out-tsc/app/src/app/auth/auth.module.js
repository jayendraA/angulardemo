import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { DataService } from '../dashboard/service/data.service';
import { LogoutComponent } from './components/logout/logout.component';
import * as i0 from "@angular/core";
export class AuthModule {
}
AuthModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: AuthModule });
AuthModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [LoginService, DataService], imports: [[
            CommonModule,
            AuthRoutingModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(AuthModule, { declarations: [LoginComponent, LogoutComponent], imports: [CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [LoginComponent, LogoutComponent],
                imports: [
                    CommonModule,
                    AuthRoutingModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                providers: [LoginService, DataService]
            }]
    }], null, null);
//# sourceMappingURL=auth.module.js.map