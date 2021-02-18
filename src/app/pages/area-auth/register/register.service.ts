import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { LoginService } from 'src/app/pages/area-auth/login/login.service';
import { Register } from 'src/app/shared/interfaces/auth-interfaces/register.interfaces';
import { TokenBearer } from 'src/app/shared/interfaces/auth-interfaces/token-bearer.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = environment.API_URL;

   constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cadastrar(credenciais: Register): Observable<TokenBearer> {
    const loginPayload = {login: credenciais.login, senha: credenciais.senha}
    return this.httpClient.post<Register>(`${this.API_URL}/usuario`, credenciais)
      .pipe(
        take(1),
        mergeMap(() => this.loginService.logar(loginPayload))
      );
  }
}
