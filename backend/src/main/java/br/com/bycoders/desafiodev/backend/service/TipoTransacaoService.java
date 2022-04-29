package br.com.bycoders.desafiodev.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bycoders.desafiodev.backend.model.TipoTransacao;
import br.com.bycoders.desafiodev.backend.repository.TipoTransacaoRepository;

@Service
public class TipoTransacaoService {
    
    @Autowired
    private TipoTransacaoRepository tipoTransacaoRepository;


    public List<TipoTransacao> listar(){
        return tipoTransacaoRepository.findAll();
    }
}
