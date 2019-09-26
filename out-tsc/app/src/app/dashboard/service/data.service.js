import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DataService {
    //  receivedFilter: EventEmitter<string>;
    constructor() {
        this.messageSource = new BehaviorSubject('default message');
        this.currentMessage = this.messageSource.asObservable();
        //         this.receivedFilter = new EventEmitter<string>();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ token: DataService, factory: function DataService_Factory(t) { return new (t || DataService)(); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(DataService, [{
        type: Injectable
    }], function () { return []; }, null);
//# sourceMappingURL=data.service.js.map