import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/shared/intefaces/auth-interfaces/register.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

   constructor(
    private httpClient: HttpClient,
  ) {}

  cadastrar(credenciais: Register): Observable<any> {
    console.log('chegou');
    return this.httpClient.post<Register>('https://accenture-java-desafio.herokuapp.com/usuarios', credenciais);
  }
}
