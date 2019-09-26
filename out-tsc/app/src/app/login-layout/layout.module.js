import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RenderComponent } from './render/render.component';
import * as i0 from "@angular/core";
export class LayoutModule {
}
LayoutModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            CommonModule,
            LayoutRoutingModule
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [HeaderComponent, FooterComponent, RenderComponent], imports: [CommonModule,
        LayoutRoutingModule], exports: [RenderComponent] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [HeaderComponent, FooterComponent, RenderComponent],
                imports: [
                    CommonModule,
                    LayoutRoutingModule
                ],
                exports: [RenderComponent]
            }]
    }], null, null);
//# sourceMappingURL=layout.module.js.map