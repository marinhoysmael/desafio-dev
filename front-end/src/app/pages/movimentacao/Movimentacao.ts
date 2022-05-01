import { TipoTransacao } from "./TipoTransacao";

export class Movimentacao {
    id: number = 0;
    tipo: TipoTransacao = new TipoTransacao();
    data: string = '';
    valor: string = '';
    cpf: string = '';
    cartao: string = '';
    hora: string = '';
    donoLoja: string = '';
    nomeLoja: string = '';
  }