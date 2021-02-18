import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { environment } from 'src/environments/environment';
import { ExtratoRequest } from './dashboard.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getExtrato(inicio: string, fim: string): Observable<any> {

    const usuario = this.authService.getUsuario();
    const token = this.authService.getToken();

    const headers: HttpHeaders = new HttpHeaders().set('Authorization', token);

    const extratoRequest: ExtratoRequest = {
      login: usuario.login,
      inicio: inicio,
      fim: fim
    };

    return this.http.post<any>(this.API_URL + '/dashboard', extratoRequest, { headers: headers })
      .pipe(take(1));
  }
}
