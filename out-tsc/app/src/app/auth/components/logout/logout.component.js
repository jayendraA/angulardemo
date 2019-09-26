import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class LogoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        sessionStorage.clear();
        this.router.navigate(['/']);
    }
}
LogoutComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: LogoutComponent, selectors: [["app-logout"]], factory: function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(i0.ɵɵdirectiveInject(i1.Router)); }, consts: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "logout works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LogoutComponent, [{
        type: Component,
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: i1.Router }]; }, null);
//# sourceMappingURL=logout.component.js.map