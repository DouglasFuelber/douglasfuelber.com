---
title: Create custom post types and taxonomies in Wordpress
date: 2019-05-11T20:22:47.227Z
cover: 2.jpg
slug: custom-post-types-taxonomies-wordpress
category: programming
language: en
key: cpt-wordpress
tags:
  - tutorial
  - wordpress
---

When developing for the Wordpress platform, we often need custom post types or taxonomies so that we can better organize the content of our sites. This process can be easily performed through plugins. However the purpose of this post is to quickly exemplify this creation process without using any plugin.

##Post Types

The code snippet below demonstrates post type creation *movie*, to allow the registration of films on our site. In the excerpt in question, I list just a few parameters and labels to illustrate. The description of each parameter and the list of other available parameters can be found in the Wordpress documentation for <a href="https://codex.wordpress.org/Function_Reference/register_post_type" target="_blank" rel="noreferrer">register post types</a>.

`gist:DouglasFuelber/1b59d902b9972d9b6f636e9cde31472b#custom-post-type.php`

##Taxonomy

If, in addition to registering the movies on our site, we would like to categorize them by genre, we can make use of a new taxonomy. In the excerpt below I create the taxonomy *genre*, with a few parameters, and link to the previously created post type. For a detailed description of each parameter used and consultation of all available options, you can refer to the documentation for Wordpress <a href="https://codex.wordpress.org/Function_Reference/register_taxonomy" target="_blank" rel="noreferrer">register taxonomies</a>.

`gist:DouglasFuelber/1b59d902b9972d9b6f636e9cde31472b#custom-taxonomy.php`

##Result

In the image below we can see the results of the records. The displayed screen is the creation of a new film. You can also see, in the left menu, the link to the movie management page, and on the right, the options to add movie genres.

![Movie register screen](/assets/custom-post-type.png "Movie register screen")
<center>Movie register screen (Source: the author)</center>

##References

- <a href="https://codex.wordpress.org/Function_Reference/register_post_type" target="_blank" rel="noreferrer">Codex Wordpress: Register post type</a>

- <a href="https://codex.wordpress.org/Function_Reference/register_taxonomy" target="_blank" rel="noreferrer">Codex Wordpress: Register taxonomy</a>