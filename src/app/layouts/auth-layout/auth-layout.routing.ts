import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "src/app/layouts/auth-layout/auth-layout.component";
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
    canActivate: [NaoLogadoGuard],
    children: [
      { path: "home", component: HomeComponent, data: {animation: 'HomePage'} },
      { path: "login", component:  LoginComponent, data: {animation: 'AboutPage'}},
      { path: "cadastrar", component:  RegisterComponent },
    ]
  },
];
