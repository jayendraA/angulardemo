import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [1, "navbar", "navbar-fixed-top"];
const _c1 = [1, "navbar-inner"];
const _c2 = [1, "container"];
const _c3 = ["data-toggle", "collapse", "data-target", ".navbar-inverse-collapse", 1, "btn", "btn-navbar"];
const _c4 = [1, "icon-reorder", "shaded"];
const _c5 = ["href", "index.html", 1, "brand"];
const _c6 = [1, "nav-collapse", "collapse", "navbar-inverse-collapse"];
const _c7 = [1, "nav", "nav-icons"];
const _c8 = [1, "active"];
const _c9 = ["href", "#"];
const _c10 = [1, "icon-envelope"];
const _c11 = [1, "icon-eye-open"];
const _c12 = [1, "icon-bar-chart"];
const _c13 = ["action", "#", 1, "navbar-search", "pull-left", "input-append"];
const _c14 = ["type", "text", 1, "span3"];
const _c15 = ["type", "button", 1, "btn"];
const _c16 = [1, "icon-search"];
const _c17 = [1, "nav", "pull-right"];
const _c18 = [1, "dropdown"];
const _c19 = ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"];
const _c20 = [1, "caret"];
const _c21 = [1, "dropdown-menu"];
const _c22 = [1, "divider"];
const _c23 = [1, "nav-header"];
const _c24 = [1, "nav-user", "dropdown"];
const _c25 = ["src", "assets/edmin/images/user.png", 1, "nav-avatar"];
export class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], factory: function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); }, consts: 61, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "div", _c1);
        i0.ɵɵelementStart(2, "div", _c2);
        i0.ɵɵelementStart(3, "a", _c3);
        i0.ɵɵelement(4, "i", _c4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "a", _c5);
        i0.ɵɵtext(6, "Edmin ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", _c6);
        i0.ɵɵelementStart(8, "ul", _c7);
        i0.ɵɵelementStart(9, "li", _c8);
        i0.ɵɵelementStart(10, "a", _c9);
        i0.ɵɵelement(11, "i", _c10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "li");
        i0.ɵɵelementStart(13, "a", _c9);
        i0.ɵɵelement(14, "i", _c11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "li");
        i0.ɵɵelementStart(16, "a", _c9);
        i0.ɵɵelement(17, "i", _c12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "form", _c13);
        i0.ɵɵelement(19, "input", _c14);
        i0.ɵɵelementStart(20, "button", _c15);
        i0.ɵɵelement(21, "i", _c16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "ul", _c17);
        i0.ɵɵelementStart(23, "li", _c18);
        i0.ɵɵelementStart(24, "a", _c19);
        i0.ɵɵtext(25, "Dropdown ");
        i0.ɵɵelement(26, "b", _c20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "ul", _c21);
        i0.ɵɵelementStart(28, "li");
        i0.ɵɵelementStart(29, "a", _c9);
        i0.ɵɵtext(30, "Item No. 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "li");
        i0.ɵɵelementStart(32, "a", _c9);
        i0.ɵɵtext(33, "Don't Click");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(34, "li", _c22);
        i0.ɵɵelementStart(35, "li", _c23);
        i0.ɵɵtext(36, "Example Header");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "li");
        i0.ɵɵelementStart(38, "a", _c9);
        i0.ɵɵtext(39, "A Separated link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "li");
        i0.ɵɵelementStart(41, "a", _c9);
        i0.ɵɵtext(42, "Support ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "li", _c24);
        i0.ɵɵelementStart(44, "a", _c19);
        i0.ɵɵelement(45, "img", _c25);
        i0.ɵɵelement(46, "b", _c20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "ul", _c21);
        i0.ɵɵelementStart(48, "li");
        i0.ɵɵelementStart(49, "a", _c9);
        i0.ɵɵtext(50, "Your Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "li");
        i0.ɵɵelementStart(52, "a", _c9);
        i0.ɵɵtext(53, "Edit Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "li");
        i0.ɵɵelementStart(55, "a", _c9);
        i0.ɵɵtext(56, "Account Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(57, "li", _c22);
        i0.ɵɵelementStart(58, "li");
        i0.ɵɵelementStart(59, "a", _c9);
        i0.ɵɵtext(60, "Logout");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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