import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RenderComponent } from './login-layout/render/render.component';
import { MainlayoutComponent } from './form-layout/mainlayout/mainlayout.component';
import { AuthGuard } from './auth.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: RenderComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'dashboard', canActivate: [AuthGuard], component: MainlayoutComponent, loadChildren: './dashboard/dashboard.module#DashboardModule' },
];
export class AppRoutingModule {
}
AppRoutingModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[RouterModule.forRoot(routes)],
        RouterModule] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            }]
    }], null, null);
//# sourceMappingURL=app-routing.module.js.map