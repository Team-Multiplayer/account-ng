import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogadoGuard implements CanActivate {

  estaLogado: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }

}
