---
title: Configurando WSL 2 no Windows 10
date: 2020-10-27T21:00:00.000Z
cover: 2.jpg
slug: configuring-wsl-2
category: programming
language: pt
tags:
  - tutorial
---

## O que é WSL?

O WSL (*Windows Subsystem for Linux*) nos permite rodar um ambiente GNU/Linux, diretamente no Windows, sem a necessidade de uma máquina virtual tradicional ou de dual boot. Entre os principais recursos estão o rápido tempo de inicialização e a integração entre Windows e Linux (incluindo a possibilidade de acessar arquivos Linux diretamente pelo Windows explorer).

É uma alternativa interessante para quem, por exemplo, necessita utilizar *containers* do Docker para desenvolvimento e não quer utilizar o Docker Desktop para Windows, que em minha opinião, não possui uma boa performance.

## Configurando WSL 2 no Windows 10

Abaixo veremos como configurar o WSL 2, disponível no Windows 10, Versão 1903, Build 18362 ou superior, de acordo com a documentação da Microsoft:

### 1. Habilitar o recurso Subsistema do Windows para Linux

Execute o comando abaixo no PowerShell como Administrador e reinicie seu computador antes de avançar para a próxima etapa. Você também pode habilitar o recurso através de Recursos do Windows.

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### 2. Atualize para WSL 2

Verifique se a versão e o número do build do seu Windows para garantir que haja suporte ao WSL 2.

#### Requisitos

- Para sistemas x64: **Versão 1903** ou superior, com **Build 18362** ou superior.
- Para sistemas ARM64: **Versão 2004** ou superior, com **Build 19041** ou superior.
- Builds abaixo de 18362 não suportam o WSL 2.

Caso exista alguma atualização relacionada ao WSL no Windows Update, instale-a.

### 3. Habilitar o recurso Plataforma de Máquina Virtual

Execute o comando abaixo no PowerShell como Administrador e reinicie seu computador antes de avançar para a próxima etapa. Você também pode habilitar o recurso através de Recursos do Windows.

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### 4. Faça download e instale o pacote de atualização do kernel do Linux

[Pacote de atualização do kernel do Linux](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

### 5. Defina o WSL 2 como a versão padrão

Execute o comando abaixo no PowerShell como Administrador.

```powershell
wsl --set-default-version 2
```

### 6. Instale uma distribuição Linux

Através da Microsoft Store, escolha uma distribuição Linux de sua preferência e instale-a. Após a instalação você poderá encontrá-la no menu iniciar do Windows.

### 7. Configure sua distribuição Linux

A primeira execução da sua nova distribuição Linux vai demorar mais tempo por causa de descompressão de arquivos necessários e provavelmente irá solicitar a criação de um usuário e senha para o sistema.

Após isso, sua distribuição Linux estará pronta para utilização.

## Referências

- <a href="https://docs.microsoft.com/pt-br/windows/wsl/" target="_blank" rel="noreferrer">Documentação do Subsistema Windows para Linux</a>
