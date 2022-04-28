package br.com.bycoders.desafiodev.backend.form;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

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
public class LoginForm {

    private String email;
	private String senha;

    public UsernamePasswordAuthenticationToken converter() {
		
		return new UsernamePasswordAuthenticationToken(email, senha);
	}
}
