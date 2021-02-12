import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/pages/area-auth/home/home.component";
import { LoginComponent } from "src/app/pages/area-auth/login/login.component";
import { RegisterComponent } from "src/app/pages/area-auth/register/register.component";


export const AuthLayoutRoutes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  { path: "login", component:  LoginComponent },
  { path: "cadastrar", component:  RegisterComponent },
];
