import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "src/app/layouts/auth-layout/auth-layout.component";
import { AboutComponent } from "src/app/pages/area-auth/about/about/about.component";
import { HomeComponent } from "src/app/pages/area-auth/home/home.component";
import { LoginComponent } from "src/app/pages/area-auth/login/login.component";
import { RegisterComponent } from "src/app/pages/area-auth/register/register.component";
import { NaoLogadoGuard } from "src/app/shared/guards/nao-logado/nao-logado.guard";

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "login", component:  LoginComponent, canActivate: [NaoLogadoGuard]},
      { path: "cadastrar", component:  RegisterComponent, canActivate: [NaoLogadoGuard]},
      { path: "sobre", component:  AboutComponent }
    ]
  },
];
