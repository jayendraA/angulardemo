import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
const _c0 = [1, "content"];
const _c1 = [1, "module"];
const _c2 = [1, "module-head"];
const _c3 = ["align", "right"];
const _c4 = [1, "btn", "btn-xs", "btn-inverse", 3, "click"];
const _c5 = [1, "module-body"];
const _c6 = [1, "form-horizontal", "row-fluid", 3, "formGroup", "ngSubmit"];
const _c7 = [1, "control-group"];
const _c8 = ["for", "basicinput", 1, "control-label"];
const _c9 = [1, "controls"];
const _c10 = ["type", "text", "name", "name", "formControlName", "name", "placeholder", "Type something here...", 1, "span8", 3, "ngModel", "ngClass", "ngModelChange"];
const _c11 = ["class", "invalid-feedback", 4, "ngIf"];
const _c12 = ["type", "text", "name", "username", "formControlName", "username", "placeholder", "Type something here...", 1, "span8", 3, "ngModel", "ngClass", "ngModelChange"];
const _c13 = ["type", "text", "name", "website", "formControlName", "website", "placeholder", "Type something here...", 1, "span8", 3, "ngModel", "ngClass", "ngModelChange"];
const _c14 = ["type", "submit", 1, "btn", "btn-small", "btn-info"];
const _c15 = [1, "invalid-feedback"];
const _c16 = [4, "ngIf"];
function ModalComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Name is required");
    i0.ɵɵelementEnd();
} }
function ModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c15);
    i0.ɵɵtemplate(1, ModalComponent_div_15_div_1_Template, 2, 0, "div", _c16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", ctx_r6.ValidateFields.name.errors.required);
} }
function ModalComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "UserName is required");
    i0.ɵɵelementEnd();
} }
function ModalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c15);
    i0.ɵɵtemplate(1, ModalComponent_div_21_div_1_Template, 2, 0, "div", _c16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", ctx_r7.ValidateFields.username.errors.required);
} }
function ModalComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "website is required");
    i0.ɵɵelementEnd();
} }
function ModalComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c15);
    i0.ɵɵtemplate(1, ModalComponent_div_27_div_1_Template, 2, 0, "div", _c16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", ctx_r8.ValidateFields.website.errors.required);
} }
const _c17 = function (a0) { return { "is-invalid": a0 }; };
export class ModalComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.users_obj = {};
        this.Is_submitted = false;
        this.users_obj = this.data['user_record'];
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            username: ['', [Validators.required]],
            website: ['', [Validators.required]],
        });
    }
    get ValidateFields() { return this.registerForm.controls; }
    onSubmit() {
        this.Is_submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.onNoClick();
    }
}
ModalComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["app-modal"]], factory: function ModalComponent_Factory(t) { return new (t || ModalComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.FormBuilder)); }, consts: 33, vars: 16, template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "div", _c1);
        i0.ɵɵelementStart(2, "div", _c2);
        i0.ɵɵelementStart(3, "h3");
        i0.ɵɵtext(4, "Update User");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", _c3);
        i0.ɵɵelementStart(6, "a", _c4);
        i0.ɵɵlistener("click", function ModalComponent_Template_a_click_6_listener($event) { return ctx.onNoClick(); });
        i0.ɵɵtext(7, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", _c5);
        i0.ɵɵelementStart(9, "form", _c6);
        i0.ɵɵlistener("ngSubmit", function ModalComponent_Template_form_ngSubmit_9_listener($event) { return ctx.onSubmit(); });
        i0.ɵɵelementStart(10, "div", _c7);
        i0.ɵɵelementStart(11, "label", _c8);
        i0.ɵɵtext(12, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", _c9);
        i0.ɵɵelementStart(14, "input", _c10);
        i0.ɵɵlistener("ngModelChange", function ModalComponent_Template_input_ngModelChange_14_listener($event) { return ctx.users_obj.name = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, ModalComponent_div_15_Template, 2, 1, "div", _c11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", _c7);
        i0.ɵɵelementStart(17, "label", _c8);
        i0.ɵɵtext(18, "Username");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", _c9);
        i0.ɵɵelementStart(20, "input", _c12);
        i0.ɵɵlistener("ngModelChange", function ModalComponent_Template_input_ngModelChange_20_listener($event) { return ctx.users_obj.username = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(21, ModalComponent_div_21_Template, 2, 1, "div", _c11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", _c7);
        i0.ɵɵelementStart(23, "label", _c8);
        i0.ɵɵtext(24, "Website");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", _c9);
        i0.ɵɵelementStart(26, "input", _c13);
        i0.ɵɵlistener("ngModelChange", function ModalComponent_Template_input_ngModelChange_26_listener($event) { return ctx.users_obj.website = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, ModalComponent_div_27_Template, 2, 1, "div", _c11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", _c7);
        i0.ɵɵelement(29, "label", _c8);
        i0.ɵɵelementStart(30, "button", _c14);
        i0.ɵɵtext(31, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(32, "div", _c9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵselect(9);
        i0.ɵɵproperty("formGroup", ctx.registerForm);
        i0.ɵɵselect(14);
        i0.ɵɵproperty("ngModel", ctx.users_obj.name)("ngClass", i0.ɵɵpureFunction1(10, _c17, ctx.Is_submitted && ctx.ValidateFields.name.errors));
        i0.ɵɵselect(15);
        i0.ɵɵproperty("ngIf", ctx.Is_submitted && ctx.ValidateFields.name.errors);
        i0.ɵɵselect(20);
        i0.ɵɵproperty("ngModel", ctx.users_obj.username)("ngClass", i0.ɵɵpureFunction1(12, _c17, ctx.Is_submitted && ctx.ValidateFields.username.errors));
        i0.ɵɵselect(21);
        i0.ɵɵproperty("ngIf", ctx.Is_submitted && ctx.ValidateFields.username.errors);
        i0.ɵɵselect(26);
        i0.ɵɵproperty("ngModel", ctx.users_obj.website)("ngClass", i0.ɵɵpureFunction1(14, _c17, ctx.Is_submitted && ctx.ValidateFields.website.errors));
        i0.ɵɵselect(27);
        i0.ɵɵproperty("ngIf", ctx.Is_submitted && ctx.ValidateFields.website.errors);
    } }, directives: [i2.ɵangular_packages_forms_forms_z, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i3.NgClass, i3.NgIf], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.FormBuilder }]; }, null);
//# sourceMappingURL=modal.component.js.map