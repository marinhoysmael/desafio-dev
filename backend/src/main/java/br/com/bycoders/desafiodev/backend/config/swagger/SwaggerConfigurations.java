package br.com.bycoders.desafiodev.backend.config.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfigurations {

	// @Bean
	// public OpenAPI customOpenAPI() {
	// return new OpenAPI()
	// .info(new Info().title("API DE PROCESSAMENTO BATCH DE ARQUIVOS DE
	// MOVIMENTAÇÃO CNAB").version("1.0.0"))
	// // Components section defines Security Scheme "mySecretHeader"
	// .components(new Components()
	// .addSecuritySchemes("mySecretHeader", new SecurityScheme()
	// .type(SecurityScheme.Type.APIKEY)
	// .in(SecurityScheme.In.HEADER)
	// .name("missingParam")))
	// // AddSecurityItem section applies created scheme globally
	// .addSecurityItem(new SecurityRequirement().addList("mySecretHeader"));
	// }

	@Bean
	public OpenAPI customOpenAPI() {
		final String securitySchemeName = "bearerAuth";
		final String apiTitle = "API DE PROCESSAMENTO BATCH DE ARQUIVOS DE MOVIMENTAÇÃO CNAB";
		final String apiVersion = "1.0.0";
		return new OpenAPI()
				.addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
				.components(
						new Components()
								.addSecuritySchemes(securitySchemeName,
										new SecurityScheme()
												.name(securitySchemeName)
												.type(SecurityScheme.Type.HTTP)
												.scheme("bearer")
												.bearerFormat("JWT")))
				.info(new Info()
					.title(apiTitle)
					.description("A API possui configuração de segurança oauth. Para gerar um token de autenticação faça uma requisição POST no endpoint /auth informando usuario e senha. Adicione o token retornado clicando no botão Authorize")
				.version(apiVersion));
	}
}
