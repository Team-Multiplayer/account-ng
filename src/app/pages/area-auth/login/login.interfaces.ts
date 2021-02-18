import { Conta } from '../../../shared/interfaces/dash-interfaces/conta.interface';
import { Usuario } from '../../../shared/interfaces/dash-interfaces/usuario.interface';

export interface LoginCredenciais {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  conta: Conta,
  contaCredito: Conta,
  dataFim: Date;
  dataInicio: Date;
  token: string;
  usuario: Usuario;
}
