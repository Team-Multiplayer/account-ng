export interface Dashboard {
  contaCorrente: ContaCorrente;
  contaCredito: ContaCredito;
}

interface ContaCredito {
  conta: Conta;
  lancamentos: any[];
}

interface ContaCorrente {
  conta: Conta;
  lancamentos: Lancamento[];
}

interface Lancamento {
  id: number;
  numeroContaUsuario: string;
  data: string;
  valor: number;
  descricao: string;
  numeroContaDestino?: any;
  tipo: string;
  categoria: Categoria;
  contaId: number;
}

interface Categoria {
  id: number;
  tipo: string;
  descricao: string;
  usuarioId: number;
}

interface Conta {
  id: number;
  numero: string;
  tipoConta: string;
  saldo: number;
  usuarioId: number;
}
