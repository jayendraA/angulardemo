import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../header/header.component";
import * as i2 from "../leftmenu/leftmenu.component";
import * as i3 from "@angular/router";
import * as i4 from "../footer/footer.component";
const _c0 = [1, "wrapper"];
const _c1 = [1, "container"];
const _c2 = [1, "row"];
const _c3 = [1, "span3"];
const _c4 = [1, "span9"];
export class MainlayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainlayoutComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: MainlayoutComponent, selectors: [["app-mainlayout"]], factory: function MainlayoutComponent_Factory(t) { return new (t || MainlayoutComponent)(); }, consts: 9, vars: 0, template: function MainlayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-header");
        i0.ɵɵelementStart(1, "div", _c0);
        i0.ɵɵelementStart(2, "div", _c1);
        i0.ɵɵelementStart(3, "div", _c2);
        i0.ɵɵelementStart(4, "div", _c3);
        i0.ɵɵelement(5, "app-leftmenu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", _c4);
        i0.ɵɵelement(7, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "app-footer");
    } }, directives: [i1.HeaderComponent, i2.LeftmenuComponent, i3.RouterOutlet, i4.FooterComponent], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(MainlayoutComponent, [{
        type: Component,
        args: [{
                selector: 'app-mainlayout',
                templateUrl: './mainlayout.component.html',
                styleUrls: ['./mainlayout.component.css']
            }]
    }], function () { return []; }, null);
//# sourceMappingURL=mainlayout.component.js.map