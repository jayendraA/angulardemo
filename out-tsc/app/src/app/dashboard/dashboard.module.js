import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './service/dashboard.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DataService } from "./service/data.service";
import { MatIconModule } from '@angular/material';
import * as i0 from "@angular/core";
export class DashboardModule {
}
DashboardModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: DashboardModule });
DashboardModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [DashboardService, DataService], imports: [[
            FormsModule,
            CommonModule,
            MaterialModule,
            ReactiveFormsModule,
            MatIconModule,
            DashboardRoutingModule
        ],
        FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(DashboardModule, { declarations: [DashboardComponent, SearchPipe, ModalComponent, ConfirmationDialogComponent], imports: [FormsModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        MatIconModule,
        DashboardRoutingModule], exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(DashboardModule, [{
        type: NgModule,
        args: [{
                declarations: [DashboardComponent, SearchPipe, ModalComponent, ConfirmationDialogComponent
                ],
                imports: [
                    FormsModule,
                    CommonModule,
                    MaterialModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    DashboardRoutingModule
                ],
                providers: [DashboardService, DataService],
                exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule],
                entryComponents: [ModalComponent, ConfirmationDialogComponent]
            }]
    }], null, null);
//# sourceMappingURL=dashboard.module.js.map