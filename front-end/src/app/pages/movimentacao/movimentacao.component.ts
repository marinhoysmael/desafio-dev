import { Component, OnInit } from '@angular/core';
import { Movimentacao } from './Movimentacao';
import { MovimentacaoService } from './movimentacao.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  constructor(private movimentacaoService: MovimentacaoService) { }

  public movimentacoes!: Array<Movimentacao>;
  ngOnInit(): void {
    this.movimentacoes = new Array<Movimentacao>();
    this.carregarMovimentacoes();
  }


  carregarMovimentacoes():void{
    debugger
    this.movimentacaoService.listar().subscribe(data =>{
      this.movimentacoes= data.content;
    })
  }

}
