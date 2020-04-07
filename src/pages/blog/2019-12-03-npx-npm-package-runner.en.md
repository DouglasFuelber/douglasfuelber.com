---
title: Using npx instead of global packages
date: 2019-12-03T09:38:35.000Z
cover: npx-example.png
slug: npx-npm-package-runner
category: programming
language: en
tags:
  - nodejs
  - npm
  - npx
---

I recently discovered the existence of *__<a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer">npx</a>__*, a __*npm*__ *package runner* that comes installed since the <a href="https://github.com/npm/npm/releases/tag/v5.2.0" target="_blank" rel="noreferrer">version 5.2.0</a>. The great benefit of *npx* is to make it easier to use CLI tools (command-line interface).

One thing that always bothered me was the need to install global package, and would use them a few times. Installing global packages always come with some problems, such as incompatible versions of the same package between different projects.

To exemplify how the *npx* works, I will create a React application. For this we execute the *__npx create-react-app hello-world__* command (Note that we haven't installed the *create-react-app* globally to create the application).

![React application creation with npx](/assets/npx-example.png "React application creation with npx (Source: the author)")

According to the *npx* docs, it will check if the given command exists in the *$PATH* or in the project binaries (*node_modules/.bin*). If found, it will be executed, otherwise the package will be installed temporarily before execution.

The features of *npx* go far beyond that demonstrated and can be checked in the <a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer">docs</a>. There is also a introductory <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" target="_blank" rel="noreferrer">post</a> very interesting about the *npx* which further describes the other features.

##References

- <a href="https://github.com/npm/npm/releases/tag/v5.2.0" target="_blank" rel="noreferrer">npm: Release 5.2.0</a>

- <a href="https://www.npmjs.com/package/npx" target="_blank" rel="noreferrer">npm: npx</a>

- <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" target="_blank" rel="noreferrer">Introducing npx: an npm package runner</a>