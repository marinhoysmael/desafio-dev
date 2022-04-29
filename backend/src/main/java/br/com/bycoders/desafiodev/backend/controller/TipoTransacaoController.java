package br.com.bycoders.desafiodev.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bycoders.desafiodev.backend.model.TipoTransacao;
import br.com.bycoders.desafiodev.backend.service.TipoTransacaoService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/tipo-transacao")
public class TipoTransacaoController {
    
    @Autowired
    private TipoTransacaoService tipoTransacaoService;

    @GetMapping("/lista")
    @Operation(summary = "Retorna uma lista com os tipos de transações")
    public ResponseEntity<List<TipoTransacao>> lista() {

        
        return ResponseEntity.ok().body(tipoTransacaoService.listar());
    }
}
