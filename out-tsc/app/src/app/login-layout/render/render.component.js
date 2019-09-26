import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../header/header.component";
import * as i2 from "@angular/router";
import * as i3 from "../footer/footer.component";
export class RenderComponent {
    constructor() { }
    ngOnInit() {
    }
}
RenderComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: RenderComponent, selectors: [["app-render"]], factory: function RenderComponent_Factory(t) { return new (t || RenderComponent)(); }, consts: 3, vars: 0, template: function RenderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-header");
        i0.ɵɵelement(1, "router-outlet");
        i0.ɵɵelement(2, "app-footer");
    } }, directives: [i1.HeaderComponent, i2.RouterOutlet, i3.FooterComponent], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(RenderComponent, [{
        type: Component,
        args: [{
                selector: 'app-render',
                templateUrl: './render.component.html',
                styleUrls: ['./render.component.css']
            }]
    }], function () { return []; }, null);
//# sourceMappingURL=render.component.js.map