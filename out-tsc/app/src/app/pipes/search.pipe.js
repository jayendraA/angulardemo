import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
SearchPipe.ngPipeDef = i0.ɵɵdefinePipe({ name: "LockFilter", type: SearchPipe, factory: function SearchPipe_Factory(t) { return new (t || SearchPipe)(); }, pure: true });
/*@__PURE__*/ i0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'LockFilter'
            }]
    }], null, null);
//# sourceMappingURL=search.pipe.js.map