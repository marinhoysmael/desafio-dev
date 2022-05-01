import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movimentacao } from '../Movimentacao';
import { Paginacao } from '../Paginacao';
import { PaginacaoMovimentacao } from '../PaginacaoMovimentacao';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {

  @Output() paginacaoEventEmitter = new EventEmitter<PageEvent>();

  displayedColumns: string[] = ['tipo', 'natureza', 'data', 'valor', 'cpf', 'cartao', 'hora', 'donoLoja', 'nomeLoja'];

  paginacao: Paginacao = new Paginacao(); 
  
  pageEvent!: PageEvent;  

  dataSource !: MatTableDataSource<Movimentacao>;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
  }

  carregarDados(dados: PaginacaoMovimentacao) {
    this.dataSource = new MatTableDataSource<Movimentacao>(dados.content);
    this.paginacao.pageSize = dados.pageable.pageSize;
    this.paginacao.length = dados.totalElements;
    console.log(this.dataSource);
  }

  public paginacaoEvent(event: PageEvent): PageEvent{

    this.paginacaoEventEmitter.emit(event);
    return event;
  }
}


