import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogadoGuard implements CanActivate {

  estaLogado: boolean = false;

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.estaLogado) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }

}
