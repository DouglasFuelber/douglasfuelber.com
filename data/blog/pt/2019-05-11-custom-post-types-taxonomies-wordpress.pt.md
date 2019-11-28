---
title: Criar tipos de posts e taxonomias customizadas no Wordpress
date: 2019-05-11T20:22:47.227Z
cover: 2.jpg
slug: custom-post-types-taxonomies-wordpress
category: programming
language: pt
key: cpt-wordpress
tags:
  - tutorial
  - wordpress
---

Ao desenvolver para a plataforma Wordpress, muitas vezes precisamos tipos de post ou taxonomias customizadas, de forma que seja possível organizar melhor o conteúdo de nossos sites. Este processo pode ser facilmente realizado através de plugins. No entanto o objetivo deste post é exemplificar rapidamente este processo de criação sem a utilização de nenhum plugin.

##Tipo de Post

O trecho de código abaixo demostra a criação do tipo de post *movie*, para possibilitar o cadastro de filmes em nosso site. No trecho em questão, listo apenas alguns parâmetros e labels para exemplificar. A descrição de cada parâmetro e a lista dos demais parâmetros disponíveis podem ser consultados na documentação do Wordpress para <a href="https://codex.wordpress.org/Function_Reference/register_post_type" target="_blank" rel="noreferrer">registro de tipos de posts</a>.

`gist:DouglasFuelber/1b59d902b9972d9b6f636e9cde31472b#custom-post-type.php`

##Taxonomia

Se, além de cadastrar os filmes em nosso site, gostaríamos de categorizá-los por gênero, podemos fazer uso de uma nova taxonomia. No trecho abaixo realizo a criação da taxonomia *genre*, com alguns poucos parâmetros, e à vinculo com o tipo de post anteriormente criado. Para uma descrição detalhada de cada parâmetro utilizado e consulta de todas opções disponíveis, é possível consultar a documentação do Wordpress para <a href="https://codex.wordpress.org/Function_Reference/register_taxonomy" target="_blank" rel="noreferrer">registro de taxonomias</a>.

`gist:DouglasFuelber/1b59d902b9972d9b6f636e9cde31472b#custom-taxonomy.php`

##Resultado

Na imagem abaixo podemos visualizar o resultados dos registros realizados. A tela apresentada é a de criação de um novo filme. Também é possível visualizar, no menu do lado esquerdo o link para a página de gerência dos filmes, e do lado direito, a opções de adicionar os gêneros do filme.

![Tela de cadastro de filme](/assets/custom-post-type.png "Tela de cadastro de filme")
<center>Tela de cadastro de filme (Fonte: do autor)</center>

##Referências

- <a href="https://codex.wordpress.org/Function_Reference/register_post_type" target="_blank" rel="noreferrer">Codex Wordpress: Register post type</a>

- <a href="https://codex.wordpress.org/Function_Reference/register_taxonomy" target="_blank" rel="noreferrer">Codex Wordpress: Register taxonomy</a>