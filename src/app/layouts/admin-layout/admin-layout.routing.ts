import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { LancamentoComponent } from "src/app/pages/area-logada/lancamento/lancamento.component";
import { LogadoGuard } from "src/app/shared/guards/logado/logado.guard";

import { DashboardComponent } from "../../pages/area-logada/dashboard/dashboard.component";
import { UserComponent } from "../../pages/area-logada/user/user.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [LogadoGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'lancamento',
        component: LancamentoComponent

      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
];
