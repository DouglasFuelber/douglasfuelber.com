---
title: Integração contínua entre Bitbucket e FTP
date: 2019-10-10T09:24:53.000Z
cover: bitbucket-pipeline.jpeg
slug: bitbucket-ftp-ci
category: devops
language: pt
tags:
  - ci/cd
  - tutorial
---

Durante o desenvolvimento de um tema para um site em Wordpress, me deparei com uma situação que tomava muito tempo durante a aplicação de algum ajuste no ambiente de homologação utilizado pelo cliente: para cada alteração que desejava aplicar nesse ambiente, eu necessitava subir os arquivos via FTP para o servidor.

Esta é uma situação muito comum neste tipo de desenvolvimento, porém queria otimizar esta atividade. Como o projeto estava sendo armazenado no BitBucket, encontrei uma maneira de utilizar os <a href="https://bitbucket.org/product/br/features/pipelines" target="_blank" rel="noreferrer">pipelines do BitBucket</a>, juntamente com o <a href="https://git-ftp.github.io/" target="_blank" rel="noreferrer">Git-FTP</a>.

A configuração do pipeline no BitBucket acontece através de um arquivo *bitbucket-pipelines.yml* criado dentro do repositório. A estrutura do arquivo e como configurá-lo pode ser verificada na <a href="https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html" target="_blank" rel="noreferrer">documentação do BitBucket</a>.

Abaixo apresento um exemplo do arquivo de configuração do pipeline utilizado.

`gist:DouglasFuelber/195e3a64a26c8eb5ddae64cb0ddebfa2`

- A seção *default* possui a definição do pipeline para as branches que não se encaixam em outras seções (é possível definir um trecho específico a ser executado apenas para uma determinada branch ou tag - muito útil quando se possui uma branch específica para determinado ambiente ou que necessite de ações específicas). Obs.: A seção *default* é executada automaticamente quando um push é realizado no repositório, a não ser que seja definido um pipeline para uma branch específica.

- O comando *step* define um bloco a ser executado pelo pipeline. Se forem definidas várias *steps*, elas são executadas de maneira sequencial.

- O bloco *script* contém os comandos que o pipeline deve executar.

  - Inicialmente são executados dois comandos *apt-get* para instalar o Git-Ftp

  - *git config git.ftp.syncroot* especifica qual a pasta do seu repositório que você deseja enviar

  - *git config git.ftp.url* especifica o diretório de destino no FTP

  - *git config git-ftp.user* define o usuário do FTP

  - *git config git-ftp.password* define a senha do FTP

  - *git ftp push* envia o diretório especificado para o FTP

Caso não deseje enviar arquivos ou pastas especificas para o FTP, é possível definir um arquivo *.git-ftp-ignore* dentro do repositório para ignorar alguns caminhos específicos. Sua configuração é exatamente igual ao *.git-ignore*.

##Referências

- <a href="https://bitbucket.org/product/br/features/pipelines" target="_blank" rel="noreferrer">Bitbucket Pipelines</a>

- <a href="https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html" target="_blank" rel="noreferrer">Configure bitbucket-pipelines.yml</a>

- <a href="https://git-ftp.github.io/" target="_blank" rel="noreferrer">Git-FTP</a>