import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (sessionStorage.getItem("token") != null && sessionStorage.getItem("token") != '') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
    canActivateChild() {
        if (sessionStorage.getItem("token")) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
    }
}
AuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ token: AuthGuard, factory: function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null);
//# sourceMappingURL=auth.guard.js.map