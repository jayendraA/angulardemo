import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { FooterComponent } from './footer/footer.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import * as i0 from "@angular/core";
export class LayoutsModule {
}
LayoutsModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: LayoutsModule });
LayoutsModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[
            CommonModule,
            LayoutsRoutingModule
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(LayoutsModule, { declarations: [HeaderComponent, LeftmenuComponent, FooterComponent, MainlayoutComponent], imports: [CommonModule,
        LayoutsRoutingModule], exports: [MainlayoutComponent] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LayoutsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    LayoutsRoutingModule
                ],
                declarations: [HeaderComponent, LeftmenuComponent, FooterComponent, MainlayoutComponent],
                exports: [MainlayoutComponent]
            }]
    }], null, null);
//# sourceMappingURL=layouts.module.js.map