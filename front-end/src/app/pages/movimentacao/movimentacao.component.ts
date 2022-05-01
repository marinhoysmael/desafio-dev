import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { observable, Observable, Subject } from 'rxjs';
import { Movimentacao } from './Movimentacao';
import { MovimentacaoService } from './movimentacao.service';
import { TabelaComponent } from './tabela/tabela.component';


@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  @ViewChild(TabelaComponent) tabela !: TabelaComponent ; 

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.carregarMovimentacoes();
  }


  carregarMovimentacoes(event?: PageEvent):void{

    let observable: Observable<any>;
    
    if(event){
      observable = this.movimentacaoService.listar(event.pageIndex, event.pageSize);
    }else{
      observable = this.movimentacaoService.listar();
    }
    
    observable.subscribe(data =>{

      this.tabela.carregarDados(data);

    });
  }

  public paginacaoEvent(event: PageEvent): PageEvent{

    
    this.carregarMovimentacoes(event);
    
    console.log(event);

    return event;
  }
}
