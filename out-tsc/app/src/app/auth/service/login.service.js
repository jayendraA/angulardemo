import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(obj) {
        return this.http.post("https://reqres.in/api/login", obj)
            .pipe(map(res => res));
    }
}
LoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ token: LoginService, factory: function LoginService_Factory(t) { return new (t || LoginService)(i0.ɵɵinject(i1.HttpClient)); }, providedIn: 'root' });
/*@__PURE__*/ i0.ɵsetClassMetadata(LoginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null);
//# sourceMappingURL=login.service.js.map