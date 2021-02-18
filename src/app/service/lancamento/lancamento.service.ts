import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  API_URL = environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
    ) { }

    novoLancamento(lancamento: any): Observable<any> {
    const token = this.authService.getToken();
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', token);

    return this.httpClient.post<any>(`${this.API_URL}/lancamento`, lancamento, {headers})
      .pipe(take(1));
  }
}
