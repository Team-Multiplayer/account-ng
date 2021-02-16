import { Conta } from "src/app/shared/interfaces/conta.interface";

export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  login: string;
  senha: string;
  contaCorrente: Conta;
  contaCredito: Conta;
}




// export interface Usuario {
//   cpf: string;
//   id: number;
//   login: string;
//   nome: string;
//   redefinirSenha: boolean;
//   senha: string;
//   senhaTemporaria: string;
// }
