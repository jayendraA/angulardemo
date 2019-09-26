import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../dashboard/service/data.service";
import * as i2 from "../../service/login.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
const _c0 = [1, "wrapper"];
const _c1 = [1, "container"];
const _c2 = [1, "row"];
const _c3 = [1, "module", "module-login", "span4", "offset4"];
const _c4 = [1, "form-vertical", 3, "formGroup", "ngSubmit"];
const _c5 = [1, "module-head"];
const _c6 = [1, "module-body"];
const _c7 = [1, "control-group"];
const _c8 = [1, "controls", "row-fluid"];
const _c9 = ["type", "text", "name", "email", "formControlName", "email", "placeholder", "Email", 1, "span12", 3, "ngModel", "ngClass", "ngModelChange"];
const _c10 = ["class", "invalid-feedback", 4, "ngIf"];
const _c11 = ["type", "password", "formControlName", "password", "name", "password", "placeholder", "Password", 1, "span12", 3, "ngModel", "ngClass", "ngModelChange"];
const _c12 = [1, "module-foot"];
const _c13 = [1, "controls", "clearfix"];
const _c14 = ["type", "submit", 1, "btn", "btn-primary", "pull-right"];
const _c15 = [1, "checkbox"];
const _c16 = ["type", "checkbox"];
const _c17 = [1, "invalid-feedback"];
const _c18 = [4, "ngIf"];
function LoginComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email must be a valid email address");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c17);
    i0.ɵɵtemplate(1, LoginComponent_div_12_div_1_Template, 2, 0, "div", _c18);
    i0.ɵɵtemplate(2, LoginComponent_div_12_div_2_Template, 2, 0, "div", _c18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", ctx_r0.ValidateFields.email.errors.required);
    i0.ɵɵselect(2);
    i0.ɵɵproperty("ngIf", ctx_r0.ValidateFields.email.errors.email);
} }
function LoginComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Password must be at least 6 characters");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", _c17);
    i0.ɵɵtemplate(1, LoginComponent_div_16_div_1_Template, 2, 0, "div", _c18);
    i0.ɵɵtemplate(2, LoginComponent_div_16_div_2_Template, 2, 0, "div", _c18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵselect(1);
    i0.ɵɵproperty("ngIf", ctx_r1.ValidateFields.password.errors.required);
    i0.ɵɵselect(2);
    i0.ɵɵproperty("ngIf", ctx_r1.ValidateFields.password.errors.minlength);
} }
const _c19 = function (a0) { return { "is-invalid": a0 }; };
export class LoginComponent {
    constructor(data, myService, formBuilder, router) {
        this.data = data;
        this.myService = myService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userdata_obj = {};
        this.Is_submitted = false;
    }
    ngOnDestroy() {
        if (this.releaseLoginData) {
            this.releaseLoginData.unsubscribe();
        }
        if (this.releasBehaviourSubject) {
            this.releasBehaviourSubject.unsubscribe();
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    get ValidateFields() { return this.loginForm.controls; }
    onSubmit() {
        this.Is_submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        // this.data.changeMessage(this.userdata['email'])
        this.data.changeMessage("Hello from Sibling");
        this.releasBehaviourSubject = this.data.currentMessage.subscribe(message => this.message = message, err => {
            alert("somthing went wrong!!");
        }, () => {
            alert('done');
        });
        console.log(this.message);
        this.releaseLoginData = this.myService.login(this.userdata_obj).subscribe((res) => {
            if (res['token'] !== null) {
                sessionStorage.setItem('token', res.token);
                this.router.navigate(['dashboard']);
            }
        }, err => {
            alert("somthing went wrong!!");
        }, () => {
            alert('done');
        });
    }
}
LoginComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], factory: function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.DataService), i0.ɵɵdirectiveInject(i2.LoginService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router)); }, consts: 25, vars: 11, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "div", _c1);
        i0.ɵɵelementStart(2, "div", _c2);
        i0.ɵɵelementStart(3, "div", _c3);
        i0.ɵɵelementStart(4, "form", _c4);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener($event) { return ctx.onSubmit(); });
        i0.ɵɵelementStart(5, "div", _c5);
        i0.ɵɵelementStart(6, "h3");
        i0.ɵɵtext(7, "Sign In");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", _c6);
        i0.ɵɵelementStart(9, "div", _c7);
        i0.ɵɵelementStart(10, "div", _c8);
        i0.ɵɵelementStart(11, "input", _c9);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.userdata_obj.email = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, LoginComponent_div_12_Template, 3, 2, "div", _c10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", _c7);
        i0.ɵɵelementStart(14, "div", _c8);
        i0.ɵɵelementStart(15, "input", _c11);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userdata_obj.password = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, LoginComponent_div_16_Template, 3, 2, "div", _c10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", _c12);
        i0.ɵɵelementStart(18, "div", _c7);
        i0.ɵɵelementStart(19, "div", _c13);
        i0.ɵɵelementStart(20, "button", _c14);
        i0.ɵɵtext(21, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "label", _c15);
        i0.ɵɵelement(23, "input", _c16);
        i0.ɵɵtext(24, " Remember me ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵselect(4);
        i0.ɵɵproperty("formGroup", ctx.loginForm);
        i0.ɵɵselect(11);
        i0.ɵɵproperty("ngModel", ctx.userdata_obj.email)("ngClass", i0.ɵɵpureFunction1(7, _c19, ctx.Is_submitted && ctx.ValidateFields.email.errors));
        i0.ɵɵselect(12);
        i0.ɵɵproperty("ngIf", ctx.Is_submitted && ctx.ValidateFields.email.errors);
        i0.ɵɵselect(15);
        i0.ɵɵproperty("ngModel", ctx.userdata_obj.password)("ngClass", i0.ɵɵpureFunction1(9, _c19, ctx.Is_submitted && ctx.ValidateFields.password.errors));
        i0.ɵɵselect(16);
        i0.ɵɵproperty("ngIf", ctx.Is_submitted && ctx.ValidateFields.password.errors);
    } }, directives: [i3.ɵangular_packages_forms_forms_z, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i5.NgClass, i5.NgIf], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: i1.DataService }, { type: i2.LoginService }, { type: i3.FormBuilder }, { type: i4.Router }]; }, null);
//# sourceMappingURL=login.component.js.map