---
title: Utilizando npx ao invés de pacotes globais
date: 2019-12-03T09:38:35.000Z
cover: npx-example.png
slug: npx-npm-package-runner
category: programming
language: pt
tags:
  - npm
  - npx
---

Descobri recentemente a existência do *__<a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer">npx</a>__*, um *package runner* do __*npm*__ que vem juntamente instalado desde a <a href="https://github.com/npm/npm/releases/tag/v5.2.0" target="_blank" rel="noreferrer">versão 5.2.0</a>. O grande benefício do *npx* é facilitar o uso de ferramentas de CLI (*command-line interface*).

Uma coisa que sempre me incomodou muito foi a necessidade de instalar pacotes globais, sendo que os utilizaria poucas vezes. A instalação de pacotes globais sempre vem com alguns problemas, como por exemplo a incompatibilidade de versões de um mesmo pacote entre diferentes projetos.

Para exemplificar como o *npx* funciona, vou criar uma aplicação React. Para isso executamos o comando *__npx create-react-app hello-world__* (Note que não instalamos o *create-react-app* globalmente para criar a aplicação).

![Criação de aplicação React com npx](/assets/npx-example.png "Criação de aplicação React com npx")
<center>Criação de aplicação React com npx (Fonte: do autor)</center>


De acordo com a documentação do *npx*, ele irá verificar se o comando informado existe no *$PATH* ou nos binários do projeto (*node_modules/.bin*). Caso encontre, o mesmo será executado, senão o pacote será instalado temporariamente antes da execução.

As funcionalidades do *npx* vão muito além dessa demonstrada e podem ser conferidas na <a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer">documentação</a>. Existe também um <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" target="_blank" rel="noreferrer">post</a> introdutório muito interessante sobre o *npx* que descreve mais a fundo as demais funcionalidades.

##Referências

- <a href="https://github.com/npm/npm/releases/tag/v5.2.0" target="_blank" rel="noreferrer">npm: Release 5.2.0</a>

- <a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer">npm: npx</a>

- <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" target="_blank" rel="noreferrer">Introducing npx: an npm package runner</a>