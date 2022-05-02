import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  private arquivoCnab!: File;

  public movimentacoesAgrupadas: any;

  constructor(private movimentacaoService: MovimentacaoService, private snckBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.carregarMovimentacoes();
    this.carregarMovimentacoesAgrupadas();
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

  carregarMovimentacoesAgrupadas():void{
    this.movimentacaoService.listarAgrupados().subscribe(data =>{
      this.movimentacoesAgrupadas =  data;
    });
  }

  public paginacaoEvent(event: PageEvent): PageEvent{
    
    this.carregarMovimentacoes(event);
    
    return event;
  }

  carregarArquivoEvent(event: any): void {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.arquivoCnab = fileList[0];
    }
  }

  enviarArquivo():void{
    if(this.arquivoCnab){
      this.movimentacaoService.uploadBatchCnab(this.arquivoCnab).subscribe(data =>{

        this.snckBar.open('Arquivo processado com sucesso', '', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.carregarMovimentacoes();
        this.carregarMovimentacoesAgrupadas();
      });
    }
  }
}
