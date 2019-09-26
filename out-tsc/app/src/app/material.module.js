// material.module.ts
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class MaterialModule {
}
MaterialModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: MaterialModule });
MaterialModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(MaterialModule, { exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(MaterialModule, [{
        type: NgModule,
        args: [{
                exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
            }]
    }], null, null);
//# sourceMappingURL=material.module.js.map