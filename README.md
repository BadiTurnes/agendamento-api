# API Agendamento

## Descrição
A Agendamento API é uma aplicação desenvolvida em Node.js que permite aos usuários realizar agendamentos e consultar datas disponíveis para agendamento. A API é construída utilizando o framework Express e armazena os dados em memória.

## Repositório GitHub

O projeto está disponível em:  
https://github.com/BadiTurnes/agendamento-api.git

## Como publicar seu projeto no GitHub

```bash
# Inicialize o repositório local (se ainda não estiver inicializado)
git init

# Adicione o repositório remoto
git remote add origin https://github.com/BadiTurnes/agendamento-api.git

# Adicione todos os arquivos e faça o commit inicial
git add .
git commit -m "Commit inicial do projeto agendamento-api"

# Envie para o GitHub
git push -u origin master
```

## Instalação
1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd agendamento-api
   ```
3. Instale as dependências:
   ```
   npm install express cors swagger-ui-express swagger-jsdoc uuid
   ```

## Como executar

```bash
# Execute a aplicação na porta padrão (3000)
npm start

# Execute em uma porta específica
PORT=4000 npm start
```
A API estará disponível em `http://localhost:<PORTA>`, onde `<PORTA>` é a porta configurada dinamicamente.

## Endpoints Swagger

Acesse a documentação Swagger em:

```
http://localhost:{PORT}/swagger
```

Substitua `{PORT}` pela porta utilizada na execução.

## Funcionalidades
- Criar, atualizar, deletar agendamento
- Listar próximos 14 dias disponíveis
- Listar dias com ou sem agendamento
- Consultar agendamento por data
- Todas respostas em JSON padronizado

## Estrutura do Projeto
```
agendamento-api
├── src
│   ├── app.js                  # Ponto de entrada da aplicação
│   ├── routes                  # Diretório contendo as rotas da API
│   │   ├── agendamentos.js     # Rotas relacionadas a agendamentos
│   │   └── datasDisponiveis.js # Rotas para datas disponíveis
│   ├── controllers             # Diretório contendo os controladores da API
│   │   ├── agendamentoController.js # Controlador para agendamentos
│   │   └── datasController.js   # Controlador para datas disponíveis
│   └── models                  # Diretório contendo os modelos da API
│       └── agendamento.js      # Modelo de agendamento
├── swagger                     # Diretório contendo a documentação Swagger
│   └── swagger.json            # Documentação da API em formato Swagger
├── package.json                # Configuração do projeto e dependências
└── README.md                   # Documentação do projeto
```

## Link do Swagger
http://localhost:3000/api-docs/

## Endpoints
### POST /agendamentos
- **Descrição**: Realiza um agendamento.
- **Corpo da Requisição**:
  - `nome`: string (obrigatório)
  - `codigo`: string ou número (obrigatório)
- **Resposta**:
  - 201 Created: Retorna os dados do agendamento criado.
  - 400 Bad Request: Retorna erro se os campos obrigatórios não forem preenchidos ou se a data for inválida.

### GET /datas-disponiveis
- **Descrição**: Retorna uma lista de datas disponíveis para agendamento nos próximos 14 dias.
- **Resposta**:
  - 200 OK: Retorna uma lista de datas no formato `DD/MM/YYYY`.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Este projeto está licenciado sob a MIT License.