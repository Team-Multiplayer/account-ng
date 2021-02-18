import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/area-logada/dashboard/dashboard.component";
import { UserComponent } from "../../pages/area-logada/user/user.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "src/app/components/components.module";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { DepositarComponent } from "src/app/pages/area-logada/depositar/depositar/depositar.component";
import { PagarComponent } from "src/app/pages/area-logada/pagar/pagar/pagar.component";
import { TransferirComponent } from "src/app/pages/area-logada/transferir/transferir/transferir.component";
import { ExtratoComponent } from "src/app/pages/area-logada/extrato/extrato.component";

@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    AdminLayoutComponent,
    DepositarComponent,
    PagarComponent,
    TransferirComponent,
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
})
export class AdminLayoutModule {}
