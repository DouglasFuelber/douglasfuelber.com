---
title: Configuring WSL 2 on Windows 10
date: 2020-10-27T21:00:00.000Z
cover: 2.jpg
slug: configuring-wsl-2
category: programming
language: en
tags:
  - tutorial
---

## What is WSL?

The Windows Subsystem for Linux (WSL) allows us to run a GNU/Linux environment, directly on Windows, without the need of a traditional virtual machine or a dual boot setup. Among the main features are the fast boot time and the integration between Windows and Linux (inclunding the possibility of access Linux files from Windows explorer).

It's an interesting alternative for those who, for example, need to use Docker containers for development purposes and don't wanna use Docker Desktop for Windows, that, in my opinion, doesn't have a good performance.

## Configuring WSL 2 on Windows 10

Below we'll see how to configure the WSL 2, available in Windows 10, Version 1903, Build 18362 or higher, according Microsoft docs:

### 1. Enable the Windows Subsystem for Linux feature

Run the bellow command on PowerShell as Administrator and restart your machine before move to the next step. You can also do it directly from the Windows Feature dialog.

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### 2. Update to WSL 2

Check if your Windows version and build number to ensure that the system support WSL 2.

#### Requirements

- For x64 systems: **Version 1903** or higher, with **Build 18362** or higher.
- For ARM64 systems: **Version 2004** or higher, with **Build 19041** or higher.
- Builds lower than 18362 do not support WSL 2.

If there is an update on Windows Update related with WSL, install it.

### 3. Enable Virtual Machine feature

Run the bellow command on PowerShell as Administrator and restart your machine before move to the next step. You can also do it directly from the Windows Feature dialog.

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### 4. Download and install the Linux kernel update package

[Linux kernel update package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

### 5. Set WSL 2 as your default version

Run the bellow command on PowerShell as Administrator.

```powershell
wsl --set-default-version 2
```

### 6. Install a Linux distribution

Open Microsoft Store, select a Linux distribution of your choice and install it. After installed you'll find it on Windows start menu.

### 7. Set up your Linux distribution

The first newly Linux distribution launch will take a few minutes to de-compress needed files and will ask you to create a system username and password.

After this, you can use your Linux distribution.

## References

- <a href="https://docs.microsoft.com/en-us/windows/wsl/" target="_blank" rel="noreferrer">Windows Subsystem for Linux Documentation</a>
