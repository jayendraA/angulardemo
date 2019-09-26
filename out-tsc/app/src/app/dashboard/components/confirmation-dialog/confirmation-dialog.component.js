import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material";
const _c0 = ["mat-dialog-content", ""];
const _c1 = ["mat-dialog-actions", ""];
const _c2 = ["mat-button", "", 3, "click"];
const _c3 = ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"];
export class ConfirmationDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ConfirmationDialogComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], factory: function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); }, consts: 7, vars: 2, template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", _c1);
        i0.ɵɵelementStart(3, "button", _c2);
        i0.ɵɵlistener("click", function ConfirmationDialogComponent_Template_button_click_3_listener($event) { return ctx.onNoClick(); });
        i0.ɵɵtext(4, "No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", _c3);
        i0.ɵɵtext(6, "Yes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵselect(1);
        i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        i0.ɵɵselect(5);
        i0.ɵɵproperty("mat-dialog-close", true);
    } }, directives: [i1.MatDialogContent, i1.MatDialogActions, i1.MatButton, i1.MatDialogClose], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ConfirmationDialogComponent, [{
        type: Component,
        args: [{
                selector: 'app-confirmation-dialog',
                templateUrl: './confirmation-dialog.component.html',
                styleUrls: ['./confirmation-dialog.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null);
//# sourceMappingURL=confirmation-dialog.component.js.map