import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/pages/home/home.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { RegisterComponent } from "src/app/pages/register/register.component";


export const AuthLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component:  LoginComponent },
  { path: "cadastrar", component:  RegisterComponent },
];
