import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NaoLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): boolean {

    // return true;
    const estaLogado = this.authService.estaLogado();

    if (!estaLogado) {
      return true;
    }

    this.router.navigate(['dashboard']);
    return false;
  }



}
