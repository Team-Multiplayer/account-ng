import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "src/app/layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    loadChildren: () => import("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)

      }
    ]
  },
  // {
  //   path: "**",
  //   redirectTo: "home"
  // }
];

@NgModule({
  imports: [
    // CommonModule,
    // BrowserModule,
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: "top"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
