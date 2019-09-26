import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import * as i0 from "@angular/core";
import * as i1 from "../../../dashboard/service/data.service";
import * as i2 from "../../service/dashboard.service";
import * as i3 from "@angular/material";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "../../../pipes/search.pipe";
const _c0 = [1, "content"];
const _c1 = [1, "module"];
const _c2 = [1, "module-head"];
const _c3 = [4, "ngFor", "ngForOf"];
const _c4 = ["type", "text", "placeholder", "Search", "id", "listSearch", 1, "form-control", 3, "ngModel", "ngModelChange"];
const _c5 = [1, "module-body"];
const _c6 = [1, "table", "table-striped", "table-bordered", "table-condensed"];
function DashboardComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r14 = ctx.$implicit;
    i0.ɵɵselect(1);
    i0.ɵɵtextInterpolate3(" Name: ", city_r14.name, ", Population: ", city_r14.population, ", Elevation: ", city_r14.elevation, "");
} }
const _c7 = ["mat-button", "", 3, "click"];
function DashboardComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵelementStart(10, "button", _c7);
    i0.ɵɵlistener("click", function DashboardComponent_tr_24_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r17); const user_r15 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.openDialog(user_r15.id); });
    i0.ɵɵelementStart(11, "mat-icon");
    i0.ɵɵtext(12, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", _c7);
    i0.ɵɵlistener("click", function DashboardComponent_tr_24_Template_button_click_13_listener($event) { i0.ɵɵrestoreView(_r17); const user_r15 = ctx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.delete(user_r15.id); });
    i0.ɵɵelementStart(14, "mat-icon");
    i0.ɵɵtext(15, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    i0.ɵɵselect(2);
    i0.ɵɵtextInterpolate(user_r15.id);
    i0.ɵɵselect(4);
    i0.ɵɵtextInterpolate(user_r15.name);
    i0.ɵɵselect(6);
    i0.ɵɵtextInterpolate(user_r15.username);
    i0.ɵɵselect(8);
    i0.ɵɵtextInterpolate(user_r15.website);
} }
export class DashboardComponent {
    constructor(data, dashboard_service, dialog) {
        this.data = data;
        this.dashboard_service = dashboard_service;
        this.dialog = dialog;
        this.shortWord = 'shortWord';
        this.cities_obj$ = Observable
            .of([
            { name: 'Los Angeles', population: '3.9 million', elevation: '233′' },
            { name: 'New York', population: '8,4 million', elevation: '33′' },
            { name: 'Chicago', population: '2.7 million', elevation: '594′' },
        ])
            .delay(1000);
        this.word$ = Observable.of('Abibliophobia');
    }
    ngOnDestroy() {
        if (this.releaseUserData) {
            this.releaseUserData.unsubscribe();
        }
        if (this.releaseModelData) {
            this.releaseModelData.unsubscribe();
        }
    }
    ngOnInit() {
        // this.releaseUserData=this.data.currentMessage.subscribe(data => {
        //   console.log("behavuiour vaL",data);
        // },err => {
        //   alert("somthing went wrong!!");
        //    },
        //  () =>{
        //      alert('done');
        //    })
        this.userdata$ = this.dashboard_service.users_data();
        console.log(this.userdata$);
        this.dashboard_service.user_data()
            .toPromise()
            .then(res => {
            this.userdata_arr = res;
        })
            .catch(err => {
        });
        //for each loop
        //  let apps = ['WhatsApp', 'Instagram', 'Facebook'];  
        //  let playStore = [];  
        //  apps.forEach(function(item){  
        //   playStore.push(item)  
        // });  
        // console.log(JSON.stringify(playStore))
        /* ---------------------Promise--------------------------------------------
           console.log("Person1: shows Ticket");
           console.log("Person2: shows Ticket");
           const wifeTicketBringing=new Promise((resolve,reject)=>{
             setTimeout(()=>{
               resolve('Ticket');
             },3000);
           
           });
   
         const getPopcorn=wifeTicketBringing.then((t)=>{
           console.log(`Wife:I have tickets`);
           console.log(`Husband:We should go in`);
           console.log(`Wife:No i am Hungry`);
           return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
         })
         const getButter=getPopcorn.then((t)=>{
           console.log(`Husband:I got some popcorn`);
           console.log(`Husband:We should go in`);
           console.log(`Wife:I Need butter on my popcorn`);
         return new Promise((resolve,reject)=>resolve(`${t} butter`));
         })
             getButter.then((t)=>console.log(`${t}`));
             console.log("Person4: shows Ticket");
             console.log("Person5: shows Ticket");
         ---------------------Promise--------------------------------------------  */
        /* ---------------------Asycn Await--------------------------------------------
       console.log("Person1: shows Ticket");
       console.log("Person2: shows Ticket");
  const Premovie=async()=>{
    const wifeTicketBringing=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Ticket');
      },3000);
    });
    
    const addbutter=new Promise((resolve,reject)=>resolve(`Butter`));
    const getPopcorn=new Promise((resolve,reject)=>resolve(`Popcorn`));
  
      let ticket=await wifeTicketBringing;
  
      console.log(`Wife:I have ${ticket}`);
      console.log(`Husband:We should go in`);
      console.log(`Wife:No i am Hungry`);
  
      let popcorn=await getPopcorn;
  
      console.log(`Husband:I got some ${popcorn}`);
      console.log(`Husband:We should go in`);
      console.log(`Wife:I Need butter on my popcorn`);
  
      let butter=await addbutter;
  
      console.log(`Husband:I got some ${butter}`);
      console.log(`Husband:We should go in`);
      console.log(`Wife:Lets go we are getting late`);
  
      return ticket;
  
  }
        Premovie().then((m)=>(console.log(`Person3: shows ${m}`)))
        console.log("Person4: shows Ticket");
        console.log("Person5: shows Ticket");
       ---------------------Asycn Await-------------------------------------------- */
    }
    openDialog(userid) {
        let user_record = this.userdata_arr.find(x => x['id'] == userid);
        const dialogRef = this.dialog.open(ModalComponent, {
            // width: '250px',
            data: { user_record: user_record, userdata: this.userdata_arr }
        });
        this.releaseModelData = dialogRef.afterClosed().subscribe(result => {
        }, err => {
            alert("somthing went wrong!!");
        }, () => {
            //  alert('done');
        });
    }
    delete(userid) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '350px',
            data: "Are you sure you want to delete?"
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let index = this.userdata_arr.findIndex(dev => dev.id == userid);
                this.userdata_arr.splice(index, 1);
            }
        }, err => {
            alert("somthing went wrong!!");
        }, () => {
            //  alert('done');
        });
    }
}
DashboardComponent.ngComponentDef = i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], factory: function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(i0.ɵɵdirectiveInject(i1.DataService), i0.ɵɵdirectiveInject(i2.DashboardService), i0.ɵɵdirectiveInject(i3.MatDialog)); }, consts: 27, vars: 8, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", _c0);
        i0.ɵɵelementStart(1, "div", _c1);
        i0.ɵɵelementStart(2, "div", _c2);
        i0.ɵɵelementStart(3, "h3");
        i0.ɵɵtext(4, "User Listing");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ul");
        i0.ɵɵtemplate(6, DashboardComponent_li_6_Template, 2, 3, "li", _c3);
        i0.ɵɵpipe(7, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", _c4);
        i0.ɵɵlistener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_8_listener($event) { return ctx.query = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", _c5);
        i0.ɵɵelementStart(10, "table", _c6);
        i0.ɵɵelementStart(11, "thead");
        i0.ɵɵelementStart(12, "tr");
        i0.ɵɵelementStart(13, "th");
        i0.ɵɵtext(14, "ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "th");
        i0.ɵɵtext(16, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "th");
        i0.ɵɵtext(18, "Username");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "th");
        i0.ɵɵtext(20, "Website");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "th");
        i0.ɵɵtext(22, "Action");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "tbody");
        i0.ɵɵtemplate(24, DashboardComponent_tr_24_Template, 16, 4, "tr", _c3);
        i0.ɵɵpipe(25, "LockFilter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(26, "br");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵselect(6);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 3, ctx.cities_obj$));
        i0.ɵɵselect(8);
        i0.ɵɵproperty("ngModel", ctx.query);
        i0.ɵɵselect(24);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(25, 5, ctx.userdata_arr, ctx.query));
    } }, directives: [i4.NgForOf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i3.MatButton, i3.MatIcon], pipes: [i4.AsyncPipe, i6.SearchPipe], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: i1.DataService }, { type: i2.DashboardService }, { type: i3.MatDialog }]; }, null);
//# sourceMappingURL=dashboard.component.js.map