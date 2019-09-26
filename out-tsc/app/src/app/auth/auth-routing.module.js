import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
];
export class AuthRoutingModule {
}
AuthRoutingModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: AuthRoutingModule });
AuthRoutingModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(AuthRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(AuthRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null);
//# sourceMappingURL=auth-routing.module.js.map