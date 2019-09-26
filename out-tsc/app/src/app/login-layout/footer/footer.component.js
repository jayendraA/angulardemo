import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [1, "footer"];
const _c1 = [1, "container"];
const _c2 = [1, "copyright"];
export class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], factory: function FooterComponent_Factory(t) { return new (t || FooterComponent)(); }, consts: 5, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "div", _c1);
        i0.ɵɵelementStart(2, "b", _c2);
        i0.ɵɵtext(3, "\u00A9 2014 Edmin - EGrappler.com ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4, "All rights reserved. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null);
//# sourceMappingURL=footer.component.js.map