---
title: Continuous integration between Bitbucket and FTP
date: 2019-10-10T09:24:53.000Z
cover: bitbucket-pipeline.jpeg
slug: bitbucket-ftp-ci
category: devops
language: en
tags:
  - ci/cd
  - tutorial
---

While developing a theme for a website in Wordpress, I came across a situation that was taking too long while applying some adjustment in the customer approval environment: for every change I wanted to apply to this environment, I needed to upload the files through FTP to the server.

This is a very common situation in this type of development, but I wanted to optimize this activity. As the project was being stored in BitBucket, I found a way to use the <a href="https://bitbucket.org/product/br/features/pipelines" target="_blank" rel="noreferrer">BitBucket pipelines</a>, together with <a href="https://git-ftp.github.io/" target="_blank" rel="noreferrer">Git-FTP</a>.

Pipeline configuration in BitBucket is realized through a file *bitbucket-pipelines.yml* created within the repository. The file structure and how to configure it can be checked at <a href="https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html" target="_blank" rel="noreferrer">BitBucket docs</a>.

Below is an example of the pipeline configuration file used.

`gist:DouglasFuelber/195e3a64a26c8eb5ddae64cb0ddebfa2`

- The section *default* has a pipeline definition for branches that do not fit into other sections (you can define a specific snippet to be executed only for a particular branch or tag - very useful when you have a specific branch for a particular environment or need specific actions ). Note: The secion *default* is executed automatically when a push is made to the repository unless a pipeline is defined for a specific branch.

- The command *step* defines a block to be executed by the pipeline. If multiple *steps*, they are executed sequentially.

- The block *script* contains the commands that the pipeline should execute.

  - Initially two commands are executed *apt-get* to install Git-Ftp

  - *git config git.ftp.syncroot* specify which folder of your repository you want to upload

  - *git config git.ftp.url* specify destination directory in FTP

  - *git config git-ftp.user* define FTP user

  - *git config git-ftp.password* define FTP password

  - *git ftp push* send specified directory to FTP

If you do not want to send specific files or folders to FTP, you can define a file *.git-ftp-ignore* within the repository to ignore some specific paths. Its configuration is exactly the same as *.git-ignore*.

##References

- <a href="https://bitbucket.org/product/br/features/pipelines" target="_blank" rel="noreferrer">Bitbucket Pipelines</a>

- <a href="https://confluence.atlassian.com/bitbucket/configure-bitbucket-pipelines-yml-792298910.html" target="_blank" rel="noreferrer">Configure bitbucket-pipelines.yml</a>

- <a href="https://git-ftp.github.io/" target="_blank" rel="noreferrer">Git-FTP</a>