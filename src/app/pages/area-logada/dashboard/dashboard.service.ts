import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
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
