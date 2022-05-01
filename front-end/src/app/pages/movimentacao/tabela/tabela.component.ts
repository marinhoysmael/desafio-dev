import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Movimentacao } from '../Movimentacao';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {

  @Input() movimentacoes !: Array<Movimentacao>;

  displayedColumns: string[] = ['id', 'tipo', 'data', 'valor', 'cpf', 'cartao', 'hora', 'donoLoja', 'nomeLoja'];

  dataSource !: MatTableDataSource<Movimentacao>;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<Movimentacao>(this.movimentacoes);
    this.changeDetector.detectChanges();
  }

}


