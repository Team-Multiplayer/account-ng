import { Usuario } from "src/app/shared/interfaces/dash-interfaces/usuario.interface";

export interface TokenBearer {
  login: string;
  token: string;
  usuario: Usuario;
  dataInicio: string;
  dataFim: string;
}
