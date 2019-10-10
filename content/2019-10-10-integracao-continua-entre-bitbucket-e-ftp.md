---
title: Integração contínua entre Bitbucket e FTP
date: 2019-10-10T09:24:53.000Z
cover: bitbucket-pipeline.jpeg
slug: integracao-continua-entre-bitbucket-e-ftp
category: DevOps
tags:
  - bitbucket
  - ci/cd  
  - ftp
  - wordpress  
---

Durante o desenvolvimento de um tema para um site em Wordpress, me deparei com uma situação que tomava muito tempo durante a aplicação de algum ajuste no ambiente de homologação utilizado pelo cliente: para cada alteração que desejava aplicar nesse ambiente, eu necessitava subir os arquivos via FTP para o servidor.

Esta é uma situação muito comum neste tipo de desenvolvimento, porém queria otimizar esta atividade. Como o projeto estava sendo armazenado no BitBucket, encontrei uma maneira de utilizar os [pipelines do BitBucket](https://bitbucket.org/product/br/features/pipelines), juntamente com o [Git-FTP](https://git-ftp.github.io/).

A configuração do pipeline no BitBucket acontece através de um arquivo *bitbucket-pipelines.yml* criado dentro do repositório. A estrutura do arquivo e como configurá-lo pode ser verificada na [documentação do BitBucket](https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html).

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

Caso não deseje enviar arquivos ou pastas esepcificas para o FTP, é possível definir um arquivo *.git-ftp-ignore* dentro do repositório para ignorar alguns caminhos específicos. Sua configuração é exatamente igual ao *.git-ignore*.

##Referências

- [Bitbucket Pipelines](https://bitbucket.org/product/br/features/pipelines)

- [Configure bitbucket-pipelines.yml](https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html)

- [Git-FTP](https://git-ftp.github.io/)