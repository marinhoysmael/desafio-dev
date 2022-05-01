package br.com.bycoders.desafiodev.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.bycoders.desafiodev.backend.dto.MovimentacaoAgrupadaDTO;
import br.com.bycoders.desafiodev.backend.model.Movimentacao;
import br.com.bycoders.desafiodev.backend.service.MovimentacaoService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/movimentacao")
public class MovimentacaoController {
    

    @Autowired
    private MovimentacaoService movimentacaoService;

    @PostMapping(value = "/upload-batch", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Upload do arquivo batch CNAB")
    public ResponseEntity<String> upload(@RequestPart MultipartFile arquivo) throws IOException{
        
        movimentacaoService.salvar(arquivo);
        return ResponseEntity.ok().body("");
    }


    @GetMapping("/lista")
    @Operation(summary = "Lista paginada das movimentações cadastradas. page: pagina que deseja recuperar; size: quantidade de registros por página; sort: ordenação desejada (atributo de movimentacao) ")
    public ResponseEntity<Page<Movimentacao>> lista(@PageableDefault(sort = "id", direction = Direction.ASC, page = 0, size = 10) Pageable paginacao) {

        Page<Movimentacao> movimentacoes = movimentacaoService.listar(paginacao);
        return ResponseEntity.ok().body(movimentacoes);
    }

    @GetMapping("/lista-agrupada")
    @Operation(summary = "Lista agrupada por loja ")
    public ResponseEntity<List<MovimentacaoAgrupadaDTO>> listaAgrupada(){
        ;
        return ResponseEntity.ok().body(movimentacaoService.listaAgrupada());
    }

}
