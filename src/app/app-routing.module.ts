import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LogadoGuard } from "src/app/shared/guards/logado/logado.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
