import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Register } from 'src/app/shared/interfaces/auth-interfaces/register.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = environment.API_URL;

   constructor(
    private httpClient: HttpClient,
  ) {}

  cadastrar(credenciais: Register): Observable<any> {
    return this.httpClient.post<Register>(`${this.API_URL}/usuario`, credenciais)
      .pipe(
        take(1)
      );
  }
}
