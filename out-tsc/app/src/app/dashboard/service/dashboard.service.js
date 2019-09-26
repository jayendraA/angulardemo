import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DashboardService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://jsonplaceholder.typicode.com/users';
    }
    user_data() {
        return this.http.get(this.apiURL)
            .pipe(map(res => res));
    }
    users_data() {
        return this.http.get(this.apiURL);
    }
}
DashboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ token: DashboardService, factory: function DashboardService_Factory(t) { return new (t || DashboardService)(i0.ɵɵinject(i1.HttpClient)); }, providedIn: 'root' });
/*@__PURE__*/ i0.ɵsetClassMetadata(DashboardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null);
//# sourceMappingURL=dashboard.service.js.map