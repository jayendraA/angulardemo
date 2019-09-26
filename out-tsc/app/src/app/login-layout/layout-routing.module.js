import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [];
export class LayoutRoutingModule {
}
LayoutRoutingModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: LayoutRoutingModule });
LayoutRoutingModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(LayoutRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LayoutRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null);
//# sourceMappingURL=layout-routing.module.js.map