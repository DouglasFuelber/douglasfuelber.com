---
title: Criar tipos de posts e taxonomias customizadas no Wordpress
date: 2019-05-11T20:22:47.227Z
cover: 2.jpg
slug: criar-tipos-de-post-taxonomias-customizadas-wordpress
category: Wordpress
tags:
  - wordpress
  - tipos de post
  - taxonomias
---

Ao desenvolver para a plataforma Wordpress, muitas vezes precisamos tipos de post e/ou taxonomias customizadas, de forma que seja possível organizar melhor o conteúdo de nossos sites. Este processo pode ser facilmente realizado através de plugins. No entanto o objetivo deste post é exemplificar rapidamente este processo de criação sem a utilização de nenhum plugin.

##Tipo de Post

O trecho de código abaixo demostra a criação do tipo de post *movie*, para possibilitar o cadastro de filmes em nosso site. No trecho em questão, listo apenas alguns parâmetros e labels para exemplificar. A descrição de cada parâmetro e a lista dos demais parâmetros disponíveis podem ser consultados na documentação do Wordpress para [registro de tipos de posts](https://codex.wordpress.org/Function_Reference/register_post_type).

```php
// A função de registro precisa estar vinculada à ação de init
add_action( 'init', 'register_movie_post_type' );

// Função de registro do tipo de post 'movie'
function register_movie_post_type() {

  // Definição das labels dos filmes
  $labels = array(
     'name' => _x( 'Filmes', null ),
	   'singular_name' => _x( 'Filme', null ),
	   'add_new_item' => __( 'Adicionar novo filme', null )
	   // Demais labels
  );

  // Definições do tipo de post
  $args = array(
    'labels' => $labels,
	  'public' => true
	  // Demais parâmetros
  );

  // Registra o tipo de post customizado com os argumentos definidos anteriormente
  register_post_type( 'movie', $args );
}
```

##Taxonomia

Se, além de cadastrar os filmes em nosso site, gostaríamos de categorizá-los por gênero, podemos fazer uso de uma nova taxonomia. No trecho abaixo realizo a criação da taxonomia *genre*, com alguns poucos parâmetros, e à vinculo com o tipo de post anteriormente criado. Para uma descrição detalhada de cada parâmetro utilizado e consulta de todas opções disponíveis, é possível consultar a documentação do Wordpress para [registro de taxonomias](https://codex.wordpress.org/Function_Reference/register_taxonomy).

```php
// A função de registro precisa estar vinculada à ação de init
add_action( 'init', 'register_genre_taxonomy', 0 );
 
// Função de registro da taxonomia 'genre' 
function register_genre_taxonomy() {
 
  // Definição das labels da taxonomia 
  $labels = array(
    'name' => _x( 'Gêneros', null ),
    'singular_name' => _x( 'Gênero', null ),
	'add_new_item' => __( 'Adicionar novo gênero' ),
	// Demais labels
  );    
 
  // Definições da taxonomia
  $args = array(
	'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'genre' ),
	// Demais parâmetros
  );
 
  // Registra a taxonomia customizada com os argumentos definidos anteriormente e realiza o vínculo com o tipo de post 'movie'
  register_taxonomy('topics', array('movie'), $args ); 
}
```

##Resultado

Na imagem abaixo podemos visualizar o resultados dos registros realizados. A tela apresentada é a de criação de um novo filme. Também é possível visualizar, no menu do lado esquerdo o link para a página de gerência dos filmes, e do lado direito, a opções de adicionar os gêneros do filme.

![Tela de cadastro de filme](/assets/custom-post-type.png "Tela de cadastro de filme")