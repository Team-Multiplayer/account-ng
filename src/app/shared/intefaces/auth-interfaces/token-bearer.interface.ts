import { Usuario } from "../../interfaces/usuario.interface";

export interface TokenBearer {
  login: string;
  token: string;
  usuario: Usuario;
  dataInicio: string;
  dataFim: string;
}
