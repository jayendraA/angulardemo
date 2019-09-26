import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '', component: DashboardComponent
    }
];
export class DashboardRoutingModule {
}
DashboardRoutingModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: DashboardRoutingModule });
DashboardRoutingModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(DashboardRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(DashboardRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null);
//# sourceMappingURL=dashboard-routing.module.js.map