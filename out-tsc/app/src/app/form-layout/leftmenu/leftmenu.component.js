import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = [1, "sidebar"];
const _c1 = [1, "widget", "widget-menu", "unstyled"];
const _c2 = [1, "active"];
const _c3 = ["routerLink", "/dashboard"];
const _c4 = [1, "menu-icon", "icon-dashboard"];
const _c5 = ["routerLink", "/table"];
const _c6 = ["data-toggle", "collapse", "href", "#togglePages", 1, "collapsed"];
const _c7 = [1, "menu-icon", "icon-cog"];
const _c8 = [1, "icon-chevron-down", "pull-right"];
const _c9 = [1, "icon-chevron-up", "pull-right"];
const _c10 = ["id", "togglePages", 1, "collapse", "unstyled"];
const _c11 = ["href", "other-login.html"];
const _c12 = [1, "icon-inbox"];
const _c13 = ["href", "other-user-profile.html"];
const _c14 = ["href", "other-user-listing.html"];
const _c15 = ["href", "", "confirm", "", 3, "click"];
const _c16 = [1, "menu-icon", "icon-signout"];
export class LeftmenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.router.navigate(['logout']);
    }
}
LeftmenuComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: LeftmenuComponent, selectors: [["app-leftmenu"]], factory: function LeftmenuComponent_Factory(t) { return new (t || LeftmenuComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router)); }, consts: 34, vars: 0, template: function LeftmenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "ul", _c1);
        i0.ɵɵelementStart(2, "li", _c2);
        i0.ɵɵelementStart(3, "a", _c3);
        i0.ɵɵelement(4, "i", _c4);
        i0.ɵɵtext(5, "Dashboard ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "li", _c2);
        i0.ɵɵelementStart(7, "a", _c5);
        i0.ɵɵelement(8, "i", _c4);
        i0.ɵɵtext(9, "Table ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ul", _c1);
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵelementStart(12, "a", _c6);
        i0.ɵɵelement(13, "i", _c7);
        i0.ɵɵelement(14, "i", _c8);
        i0.ɵɵelement(15, "i", _c9);
        i0.ɵɵtext(16, "More Pages ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "ul", _c10);
        i0.ɵɵelementStart(18, "li");
        i0.ɵɵelementStart(19, "a", _c11);
        i0.ɵɵelement(20, "i", _c12);
        i0.ɵɵtext(21, "Login ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "li");
        i0.ɵɵelementStart(23, "a", _c13);
        i0.ɵɵelement(24, "i", _c12);
        i0.ɵɵtext(25, "Profile ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "li");
        i0.ɵɵelementStart(27, "a", _c14);
        i0.ɵɵelement(28, "i", _c12);
        i0.ɵɵtext(29, "All Users ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "li");
        i0.ɵɵelementStart(31, "a", _c15);
        i0.ɵɵlistener("click", function LeftmenuComponent_Template_a_click_31_listener($event) { return ctx.logout(); });
        i0.ɵɵelement(32, "i", _c16);
        i0.ɵɵtext(33, "Logout ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LeftmenuComponent, [{
        type: Component,
        args: [{
                selector: 'app-leftmenu',
                templateUrl: './leftmenu.component.html',
                styleUrls: ['./leftmenu.component.css']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, null);
//# sourceMappingURL=leftmenu.component.js.map