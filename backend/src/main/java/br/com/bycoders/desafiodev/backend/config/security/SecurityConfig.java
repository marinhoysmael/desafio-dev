package br.com.bycoders.desafiodev.backend.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import br.com.bycoders.desafiodev.backend.filter.AutenticacaoViaTokenFIlter;
import br.com.bycoders.desafiodev.backend.repository.UsuarioRepository;
import br.com.bycoders.desafiodev.backend.service.AutenticacaoService;
import br.com.bycoders.desafiodev.backend.service.TokenService;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    
    @Autowired
	private AutenticacaoService autenticacaoService;

    @Autowired
	private TokenService tokenService;
	
	@Autowired
	private UsuarioRepository usuarioRepository;

    @Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}

    @Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(autenticacaoService).passwordEncoder(new BCryptPasswordEncoder());
	}

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors()
            .and()
                .authorizeRequests()
                    .antMatchers(HttpMethod.GET, "/doc/**", "/swagger-ui/**", "/v3/api-docs/**")
                        .permitAll()
                    .antMatchers(HttpMethod.POST, "/auth")
                        .permitAll()
                    .anyRequest()
                        .authenticated()
            .and()
                .csrf()
                    .disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
                .addFilterBefore(new AutenticacaoViaTokenFIlter(tokenService, usuarioRepository), UsernamePasswordAuthenticationFilter.class);
    
    }
}
