import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { LoginService } from 'src/app/pages/area-auth/login/login.service';
import { Register } from 'src/app/shared/interfaces/auth-interfaces/register.interfaces';
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

  cadastrar(credenciais: Register): Observable<any> {
    const loginPayload = {login: credenciais.login, senha: credenciais.senha}
    return this.httpClient.post<Register>(`${this.API_URL}/usuario`, credenciais)
      .pipe(
        take(1),
        mergeMap(details => this.loginService.logar(loginPayload))
      );
  }
}
