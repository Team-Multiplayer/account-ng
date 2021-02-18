import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "src/app/layouts/admin-layout/admin-layout.component";
import { DepositarComponent } from "src/app/pages/area-logada/depositar/depositar.component";
import { DashboardComponent } from "src/app/pages/area-logada/dashboard/dashboard.component";
import { PagarComponent } from "src/app/pages/area-logada/pagar/pagar.component";
import { TransferirComponent } from "src/app/pages/area-logada/transferir/transferir.component";
import { LogadoGuard } from "src/app/shared/guards/logado/logado.guard";


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
<<<<<<< HEAD
      // {
      //   path: 'perfil',
      //   component: UserComponent
      // },
      {
        path: 'extrato',
        component: ExtratoComponent
      },

=======
      {
        path: 'perfil',
        component: UserComponent
      },
>>>>>>> 42123c9cc3acf29b372cde9e09bc70687e88c479
    ]
  }
];
