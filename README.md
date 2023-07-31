
# Projeto de Crypto Moedas

Este é um projeto de Crypto Moedas que permite aos usuários visualizarem informações sobre as principais criptomoedas, gerenciarem sua carteira de moedas e realizar transferências entre contas.

## Telas Principais

### LandingPage

A LandingPage é a tela inicial do projeto de Crypto Moedas. Ela possui os seguintes recursos:

- **Modal para login:** Permite que os usuários façam login na plataforma, fornecendo suas credenciais de acesso.

- **Modal para cadastro:** Permite que novos usuários se cadastrem na plataforma, fornecendo as informações necessárias para criar uma conta.

- **Inscrição por e-mail:** Os usuários podem se inscrever na plataforma, fornecendo seu endereço de e-mail para receber atualizações e notícias sobre as principais criptomoedas.

- **Tabela de Crypto moedas:** Exibe uma tabela listando os detalhes das principais criptomoedas, como nome, símbolo, preço atual, variação percentual, etc.

![Captura de tela de 2023-07-31 08-37-15](https://github.com/Pedro-Alcantara-M/cryptocurrency/assets/77678283/259a1625-2f66-4f20-b9a2-d8e2dbbe6a99)

### Dashboard

O Dashboard é uma tela de visualização detalhada das Crypto moedas. Ele possui os seguintes recursos:

- **Tabela com as moedas da carteira do usuário:** Exibe uma tabela com as criptomoedas que o usuário possui em sua carteira, mostrando os detalhes relevantes para cada moeda.

- **Modal para adicionar uma crypto moeda na carteira:** Permite que o usuário adicione uma nova criptomoeda à sua carteira, informando a quantidade e outros detalhes necessários.

- **Modal para transferências de crypto moedas com depósito e saque:** Permite que o usuário realize transferências de criptomoedas entre contas, seja para depósito ou saque.

![Captura de tela de 2023-07-31 08-36-44](https://github.com/Pedro-Alcantara-M/cryptocurrency/assets/77678283/146063e0-4a4c-48df-803f-96e2088b09e2)

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- TypeScript
- ReactJS
- Vite
- Material UI

## Instalação

Para iniciar o projeto de Crypto Moedas, siga os passos abaixo:

1. Instale o `json-server` globalmente na sua máquina usando o npm:

```bash
npm install -g json-server
```

2. Navegue para a pasta do projeto e abra um terminal nessa pasta.
3. Instale as dependências do projeto usando yarn ou npm:

```bash
yarn install
# ou
npm install
```

4. Abra outro terminal na pasta do projeto e execute o seguinte comando para rodar a fake API usando json-server.

```bash
json-server --watch db.json --port 3004
```

5. Após a execução do json-server, você pode iniciar o projeto usando:

```bash
yarn start
# ou
npm run start
```

6. Clique no link que aparecerá no seu terminal (provavelmente: http://localhost:5173/) para abrir o site do projeto no seu navegador.

