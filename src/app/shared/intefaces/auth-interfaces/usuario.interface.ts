export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  login: string;
  senha: string;
  contaCorrente: ContaCorrente;
  contaCredito: ContaCorrente;
}

interface ContaCorrente {
  id: number;
  numero: string;
  tipoConta: string;
  saldo: number;
  lancamentos: any[];
}
