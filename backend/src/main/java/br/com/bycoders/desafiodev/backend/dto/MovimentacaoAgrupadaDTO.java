package br.com.bycoders.desafiodev.backend.dto;

import java.math.BigDecimal;
import java.util.List;

import br.com.bycoders.desafiodev.backend.model.Movimentacao;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MovimentacaoAgrupadaDTO {
    
    private String nomeLoja;
    private String donoLoja;
    private List<Movimentacao> movimentacoes;
    private BigDecimal total;
}
