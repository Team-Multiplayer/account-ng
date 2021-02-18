import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { UserComponent } from "../../pages/area-logada/user/user.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "src/app/components/components.module";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { DepositarComponent } from "src/app/pages/area-logada/depositar/depositar.component";
import { PagarComponent } from "src/app/pages/area-logada/pagar/pagar.component";
import { TransferirComponent } from "src/app/pages/area-logada/transferir/transferir.component";
import { DashboardComponent } from "src/app/pages/area-logada/dashboard/dashboard.component";

@NgModule({
  declarations: [
    UserComponent,
    AdminLayoutComponent,
    DepositarComponent,
    PagarComponent,
    TransferirComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
})
export class AdminLayoutModule {}
