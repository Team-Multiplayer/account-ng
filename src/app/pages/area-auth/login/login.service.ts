import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredenciais } from 'src/app/shared/intefaces/auth-interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  logar(credenciais: LoginCredenciais): Observable<any> {
    return this.httpClient.post<LoginCredenciais>("http://localhost:8080/api/login", credenciais);
  }
}
