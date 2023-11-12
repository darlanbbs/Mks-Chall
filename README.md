# Desafio Front-end MKS

# Descrição
Este é o projeto de front-end desenvolvido como parte do desafio proposto pela MKS. Trata-se de um e-commerce que consome a API REST de produtos da loja para exibir a lista de produtos disponíveis. A aplicação permite aos usuários:

- Listar Produtos: A lista de produtos é obtida dinamicamente da API da MKS e exibida na página inicial do aplicativo.

- Adicionar Produtos ao Carrinho: Os usuários podem adicionar produtos ao carrinho diretamente da lista de produtos. Um botão de adição permite que o usuário inclua um item ao carrinho.

- Quantidade Personalizável no Carrinho: No carrinho, os usuários podem ajustar a quantidade de cada produto adicionado, utilizando botões de incremento e decremento. Isso proporciona uma experiência intuitiva para ajustar a quantidade desejada de cada item.

- Shimmer/Skeleton durante o Carregamento: Enquanto os dados estão sendo carregados da API, um efeito de shimmer/skeleton é exibido para fornecer feedback visual ao usuário.

# Demonstração
Acesse a aplicação aqui.

Como executar localmente
- Clone o repositório: ```git clone git@github.com:darlanbbs/Mks-Chall.git```
- Instale as dependências: ```npm install ou yarn```
- Execute a aplicação: ```npm run dev ou yarn run dev```
  
# Testes Unitários
Os testes unitários foram implementados utilizando Jest e a testing-library. Para executar os testes, utilize o comando: ```npm run test ou yarn run test```

# Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Next.js: Framework React para construção de aplicações web.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
- Styled-Components: Biblioteca para estilização de componentes React com suporte a CSS-in-JS.
- Jest: Framework de teste para JavaScript e TypeScript.
- React Testing Library: Ferramenta de testes para React que incentiva práticas de teste centradas no usuário.
- Redux: Biblioteca para gerenciamento de estado na aplicação.
  
# Design

- <a href="https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1">Figma</a>
- <a href="https://mks-challenge-api-frontend.herokuapp.com/api-docs/">API</a>
- <a href="https://mks-chall-mwf70dzwh-darlanbbs.vercel.app/">Aplicação</a>



# Layout 


- Página inicial

  ![Web1](https://github.com/darlanbbs/Mks-Chall/blob/main/layout/homepage.png)

 - Carrinho de compras

     ![Web1](https://github.com/darlanbbs/Mks-Chall/blob/main/layout/sideBar.png) 
