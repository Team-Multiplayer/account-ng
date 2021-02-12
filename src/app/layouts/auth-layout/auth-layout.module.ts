import { HomeComponent } from './../../pages/area-auth/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from 'src/app/pages/area-auth/register/register.component';
import { LoginComponent } from 'src/app/pages/area-auth/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from 'src/app/layouts/auth-layout/auth-layout.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AuthLayoutModule { }
