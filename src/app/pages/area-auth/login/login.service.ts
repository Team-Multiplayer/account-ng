import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginCredenciais } from 'src/app/shared/interfaces/auth-interfaces/login.interface';
import { TokenBearer } from 'src/app/shared/interfaces/auth-interfaces/token-bearer.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  logar(credenciais: LoginCredenciais): Observable<TokenBearer> {
    return this.http.post<TokenBearer>(this.API_URL + '/login', credenciais)
      .pipe(
        take(1),
        tap( response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
  }
}
