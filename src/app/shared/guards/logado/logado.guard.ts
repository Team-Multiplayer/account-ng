import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    canActivate(): boolean {

      // return true;
      const estaLogado = this.authService.estaLogado();
      // se está logado
      if (estaLogado) {
        // deixa passar pra página
        return true;
      }
      // se estiver logado manda pra home e não deixa passar
      this.router.navigate(['home'])
      return false;
    }

}
