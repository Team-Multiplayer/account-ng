export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  login: string;
  senha: string;
  contaCorrente: Conta;
  contaCredito: Conta;
}

interface Conta {
  id: number;
  numero: string;
  tipoConta: string;
  saldo: number;
  lancamentos: any[];
}
