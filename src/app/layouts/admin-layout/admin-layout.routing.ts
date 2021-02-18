import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { DepositarComponent } from "src/app/pages/area-logada/depositar/depositar/depositar.component";
import { ExtratoComponent } from "src/app/pages/area-logada/extrato/extrato.component";
import { PagarComponent } from "src/app/pages/area-logada/pagar/pagar/pagar.component";
import { TransferirComponent } from "src/app/pages/area-logada/transferir/transferir/transferir.component";
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
        path: 'depositar',
        component: DepositarComponent
      },
      {
        path: 'pagar',
        component: PagarComponent
      },
      {
        path: 'transferir',
        component: TransferirComponent
      },
      {
        path: 'perfil',
        component: UserComponent
      },
      {
        path: 'extrato',
        component: ExtratoComponent
      },

    ]
  }
];
