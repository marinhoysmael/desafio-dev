# Desafio programação - para vaga desenvolvedor - Backend

1. **A API foi desenvolvida em Java 11 e o ecosistema Spring.** Logo toda a configuração e parametrização do projeto fica concentrada no application.yml em /src/main/resource;

2. **A migração e evolução do banco de dados é de responsabilidade do [Liquibase] (https://www.liquibase.org/).** Onde as migrations foram configuradas em arquivos .yaml no diretório src/main/resource/db/changelog;

3. **O Banco de dados configurado é o Postegres.** 
database name: postgres
schema: public
username: postgres
password: postgres

OBS: essa configuração fica no application.yml

4. **Por se tratar de uma aplicação Java + Spring, optei por gerar um .jar**. Logo, para que o projeto seja executado, basta executar a classe: BackendApplication.java

5. **O projeto utiliza a porta 8080 e o contexto /movimentacao-api**

6. **A documentação da API foi feita através do Swagger**. Para acessa-la utilize o **endereço http://localhost:8080/movimentacao-api/doc**

7. **A API possui um fator de autenticação**. Para acessar os endpoints é preciso enviar uma requisição post no **endereço (http://localhost:8080/movimentacao-api/auth)**
Existe um usuário cadastrado no banco com login: usuario@email.com e senha: 123456 
```
curl -X 'POST' \
  'http://localhost:8080/movimentacao-api/auth' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "usuario@email.com",
  "senha": "123456"
}'
```

8. **Utilizar o JWT retornado na requisião de autenticação para fazer outras requisições**