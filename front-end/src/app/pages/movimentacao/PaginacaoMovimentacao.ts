import { Movimentacao } from "./Movimentacao";

export class PaginacaoMovimentacao {
    content: Array<Movimentacao> = new Array<Movimentacao>();
    pageable: any;
    totalElements: number = 0;
}