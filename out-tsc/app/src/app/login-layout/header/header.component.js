import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [1, "navbar", "navbar-fixed-top"];
const _c1 = [1, "navbar-inner"];
const _c2 = [1, "container"];
const _c3 = ["data-toggle", "collapse", "data-target", ".navbar-inverse-collapse", 1, "btn", "btn-navbar"];
const _c4 = [1, "icon-reorder", "shaded"];
const _c5 = ["href", "index.html", 1, "brand"];
const _c6 = [1, "nav-collapse", "collapse", "navbar-inverse-collapse"];
const _c7 = [1, "nav", "pull-right"];
const _c8 = ["href", "#"];
export class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], factory: function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); }, consts: 15, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "div", _c1);
        i0.ɵɵelementStart(2, "div", _c2);
        i0.ɵɵelementStart(3, "a", _c3);
        i0.ɵɵelement(4, "i", _c4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "a", _c5);
        i0.ɵɵtext(6, " Edmin ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", _c6);
        i0.ɵɵelementStart(8, "ul", _c7);
        i0.ɵɵelementStart(9, "li");
        i0.ɵɵelementStart(10, "a", _c8);
        i0.ɵɵtext(11, " Sign Up ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "li");
        i0.ɵɵelementStart(13, "a", _c8);
        i0.ɵɵtext(14, " Forgot your password? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null);
//# sourceMappingURL=header.component.js.map