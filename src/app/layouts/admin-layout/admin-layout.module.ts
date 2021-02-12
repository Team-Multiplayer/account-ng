import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/area-logada/dashboard/dashboard.component";
import { UserComponent } from "../../pages/area-logada/user/user.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "src/app/components/components.module";
import { AuthLayoutComponent } from "src/app/layouts/auth-layout/auth-layout.component";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";

@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule
  ]
})
export class AdminLayoutModule {}
