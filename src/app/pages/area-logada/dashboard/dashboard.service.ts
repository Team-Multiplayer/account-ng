import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginCredenciais } from 'src/app/shared/intefaces/auth-interfaces/login.interface';
import { TokenBearer } from 'src/app/shared/intefaces/auth-interfaces/token-bearer.interface';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  buscarDadosDashboard(): Observable<any> {

    const usuario = this.authService.getUsuario();
    const token = this.authService.getToken();

    const headers: HttpHeaders = new HttpHeaders().set('Authorization', token);

    return this.http.get<any>(this.API_URL + '/dashboard/' + usuario.login, { headers: headers })
    .pipe(take(1));

  }

}
