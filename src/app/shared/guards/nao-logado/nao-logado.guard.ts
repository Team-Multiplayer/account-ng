import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

    // REMOVER
    return true;


    // se não está logado
    if (!this.authService.estaLogado()) {
      // deixa passar pra página
      return true;
    }
    // se estiver logado manda pra home e não deixa passar
    this.router.navigate(['home'])
    return false;
  }



}
