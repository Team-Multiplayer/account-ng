import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/intefaces/auth-interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: Usuario | undefined;
  private token: string | undefined;

  constructor(
    private router: Router
    ) { }

  setUsuario(userData: Usuario) {
    this.usuario = userData;
    localStorage.setItem('@user', JSON.stringify(userData));
  }

  getUsuario() {
    if (this.usuario) {
      return this.usuario;
    }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('@token', token);
  }

  getToken() {
    if (this.token){
      return this.token;
    }

    const storedToken = localStorage.getItem('@token');
    if (storedToken) {
      this.token = storedToken;
      return this.token;
    }

    return undefined;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  estaLogado() {

  }

}
