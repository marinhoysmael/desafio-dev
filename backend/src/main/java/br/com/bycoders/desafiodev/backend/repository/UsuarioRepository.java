package br.com.bycoders.desafiodev.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bycoders.desafiodev.backend.model.Usuario;



public interface UsuarioRepository  extends JpaRepository<Usuario, Long>{

	Optional<Usuario> findByEmail(String email);
}
