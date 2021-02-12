import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/area-logada/dashboard/dashboard.component";
import { UserComponent } from "../../pages/area-logada/user/user.component";

export const AdminLayoutRoutes: Routes = [

  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
];
