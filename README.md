# RELAYZ - Front-end test

Para executar as duas tarefas passadas no teste, eu criei um projeto Next.js com um menu "Home" e "Campaign", onde na página home é exibida os Nodes conforme a primeira tarefa e na página Campaign é exibido o formulário de criação de uma nova campanha. 

Página Home: Exibe a lista de nodes após consulta de API. Ao clicar em um node, ele será exibido de forma mais destacada no início da página.

Página Campaign: Traz o formulário de criação de campanhas, onde são feitas as validaçãoes de acordo com o solicitado na task. Utilizei o React Hook Form para criar os campos do formulário de forma não controlada e as validações foram criadas a partir da biblioteca zod.

## Rodando o projeto

Após clonado o repositório, precisa entrar na pasta do projeto, instalar as dependências e rodar o servidor de desenvolvimento:

```bash
npm install

npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser para ver o resultado.